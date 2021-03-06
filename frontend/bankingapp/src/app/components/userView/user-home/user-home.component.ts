import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { BehaviourService } from 'src/app/services/behaviour.service';
import { RestService } from 'src/app/services/rest.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  showinput: boolean = false;

  loggedInUser: Customer;
  totalBalance: number = 0;
  showTransactionDetails: boolean = false;
  constructor(private local: LocalStorageService, private rest: RestService, private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.local.getCustomer('loggedInUser');
    if(this.loggedInUser){
    this.rest.getCustomer(this.loggedInUser.id).subscribe(v => {
      this.loggedInUser = v;
      for(let account of this.loggedInUser.accountList) {
        this.totalBalance += account.balance;
        console.log(this.totalBalance);
      }
    });
    }
  }

  showTransactions() {
    this.showTransactionDetails = !this.showTransactionDetails;
  }

  logout() {
    this.local.clearCustomer();
    this.router.navigate(['/landingpage']);
  }

  showInput(){
    this.showinput = !this.showinput;
  }

}
