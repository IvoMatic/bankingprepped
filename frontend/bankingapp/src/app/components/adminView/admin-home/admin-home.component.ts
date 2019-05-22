import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  admin: string;
  constructor(private local: LocalStorageService) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

}
