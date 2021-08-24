import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../helpers.service';
import { ConstantsService } from '../constants.service';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.css']
})
export class IceCREAMComponent implements OnInit {
  creamPriceUSD: number = 0;
  iceCreamTotalSupply: number = 0;

  constructor(
    public helpers: HelpersService,
    public constants: ConstantsService,
  ) { }

  async ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.creamPriceUSD = await this.helpers.getTokenPriceUSD(this.constants.CREAM);

    // provider @dev make a service for this
    const provider = (await detectEthereumProvider()) as any;
    const ethereum = new ethers.providers.Web3Provider(provider);

    // fetch total iceCREAM supply
    const iceCreamAbi = require(`src/assets/abis/iceCREAM.json`);
    const iceCreamAddress = this.constants.ICE_CREAM;
    const iceCreamContract = new ethers.Contract(iceCreamAddress, iceCreamAbi, ethereum);
    const iceCreamTotalSupply = ethers.utils.formatUnits(await iceCreamContract.supply({gasLimit: 100000}), 'ether');
    this.iceCreamTotalSupply = parseFloat(iceCreamTotalSupply);
  }

}
