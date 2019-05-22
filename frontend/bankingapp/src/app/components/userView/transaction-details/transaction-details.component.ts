import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Customer } from 'src/app/models/Customer';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  loggedInUser: Customer;
  showDetails: boolean = false;
  chosenAccount: Account;
  constructor(private local: LocalStorageService, private rest: RestService) { }

  ngOnInit() {
    this.loggedInUser = this.local.getCustomer('loggedInUser');
  }

  show(iban: string) {
    this.showDetails = true;
    this.rest.getAccount(iban).subscribe(v => this.chosenAccount = v);
  }
}
