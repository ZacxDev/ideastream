import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.less']
})
export class ConnectWalletComponent implements OnInit {
  address: string | undefined;

  constructor(private web3: Web3Service) { }

  ngOnInit(): void {
  }

  Connect() {
    this.web3.connectAccount().then(response => {
        console.log(response)
      if (response?.length) {
        this.address = response[0];
      }
    }).catch((error: any) => {
      console.error(error);
    });
  }

}
