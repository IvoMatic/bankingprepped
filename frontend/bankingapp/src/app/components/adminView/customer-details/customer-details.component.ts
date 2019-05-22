import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  constructor() { }
  @Input()
  customer: Customer;
  ngOnInit() {
    
  }

}
