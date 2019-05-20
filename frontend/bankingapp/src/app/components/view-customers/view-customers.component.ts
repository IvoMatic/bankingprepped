import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  customerList: Customer[];
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.allCustomers().subscribe(v => this.customerList=v);
  }

}
