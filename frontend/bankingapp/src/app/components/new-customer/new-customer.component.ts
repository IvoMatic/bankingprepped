import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  newCustomer() {
    var emptyCustomer = new Customer();
    this.rest.newCustomer(emptyCustomer).subscribe();
  }
}
