import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  admin: string;
  constructor(private local: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.admin = this.local.getAdmin();
  }

  logout() {
    this.local.clearAdmin();
    this.router.navigate(['/home']);
  }
}
