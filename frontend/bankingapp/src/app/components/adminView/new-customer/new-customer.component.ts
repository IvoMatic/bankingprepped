import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Customer } from 'src/app/models/Customer';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  admin: string;

  constructor(private rest: RestService, private local: LocalStorageService) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

  newCustomer() {
    var emptyCustomer = new Customer();
    this.rest.newCustomer(emptyCustomer).subscribe();
  }
}
