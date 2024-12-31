import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import modal from '../helper/wallet_connect';
import { config } from '../helper/config';
import { getAccount, signMessage, disconnect } from '@wagmi/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wallet_connect';
  connected_wallet: any = 'Connect Wallet';
  connected_account: any
  constructor ()  {}
  async connectWallet() {
    // debugger
    this.connected_account = await getAccount(config)
    if (this.connected_account.address) {
      if (this.connected_account.isConnecting && !this.connected_account.isConnected) {
        await signMessage(config, { message: 'Ensure you are connecting to the Mat1sse. Confirm the connection request in your wallet.' }).then((signature) => {
          modal.open({ view: "Account" })
        }).catch((error) => {
          console.log("User Rejected");
          disconnect(config)
        });
      } else {
        modal.open({ view: "Account" })
      }

    } else {
      modal.open({ view: "Connect" })
    }
  }
  isWalletConnected() {
    // return this.connected_wallet
    if (getAccount(config).isConnected) {
       this.connected_wallet = getAccount(config).address
      console.log("connect---",this.connected_wallet);
      return this.connected_wallet
       
    } else {
      this.connected_wallet = 'Connected Wallet'
      console.log("calling---");
      return  this.connected_wallet
    }
    
  }
}
