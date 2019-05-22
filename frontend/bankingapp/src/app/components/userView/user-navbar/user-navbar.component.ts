import { Component, OnInit } from '@angular/core';
import { BehaviourService } from 'src/app/services/behaviour.service';
import { Customer } from 'src/app/models/Customer';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private router: Router, private behaviourService: BehaviourService, private local: LocalStorageService) { }

  loggedInUser: Customer;

  ngOnInit() {
    this.loggedInUser = this.local.getCustomer('loggedInUser');

  }

  logout() {
    this.local.clearCustomer();
    this.router.navigate(['/home']);
  }

}
