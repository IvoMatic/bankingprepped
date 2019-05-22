import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Customer } from 'src/app/models/Customer';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  admin: string;
  constructor(private rest: RestService, private local: LocalStorageService) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

  addCheckingAccount(id: number) {
    this.rest.addAccount(id, 'Checking').subscribe();
  }

  addSavingsAccount(id: number) {
    this.rest.addAccount(id, 'Savings').subscribe();
  }

  addIndividualRetirementAccount(id: number) {
    this.rest.addAccount(id, 'Individual retirement').subscribe();
  }

}
