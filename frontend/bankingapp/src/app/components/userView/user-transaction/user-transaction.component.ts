import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Customer } from 'src/app/models/Customer';
import { RestService } from 'src/app/services/rest.service';
import { UpdateAccountRQ } from 'src/app/models/UpdateAccountRQ';
import { Account } from 'src/app/models/Account';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-transaction',
  templateUrl: './user-transaction.component.html',
  styleUrls: ['./user-transaction.component.css']
})
export class UserTransactionComponent implements OnInit {

  constructor(private local: LocalStorageService, private rest: RestService, private location: Location) { }

  loggedInUser: Customer;

  ngOnInit() {
    this.loggedInUser = this.local.getCustomer('loggedInUser');
  }

  transfer(iban2: string, amount: number) {
    const iban1 = this.loggedInUser.accountList[0].iban.value;
    const request = new UpdateAccountRQ(iban1, iban2, amount);
    this.rest.transfer(request).subscribe();
    alert('Transaction successful!')
    window.location.reload();
  }

}
