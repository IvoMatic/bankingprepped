import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Customer } from 'src/app/models/Customer';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  admin: string;
  customerList: Customer[];
  constructor(private rest: RestService, private local: LocalStorageService) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
    if(this.admin) {
    this.rest.allCustomers().subscribe(v => this.customerList=v);
    }
    
  }

}
