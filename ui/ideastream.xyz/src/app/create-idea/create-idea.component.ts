import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.less']
})
export class CreateIdeaComponent implements OnInit {

  constructor(private web3: Web3Service) { }

  ngOnInit(): void {
  }

  CreateIdea() {
    this.web3.connectAccount().then(r => {
      if (r?.length) {
      const addr = r[0]
    if (this.web3.web3js) {
      this.web3.web3js.eth.sendTransaction(
            from: addr,
            to: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      )
    }
      }
    })
  }

}
