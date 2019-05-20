import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { LoginComponent } from './components/login/login.component';
import { TransferComponent } from './components/transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddAccountComponent,
    NewCustomerComponent,
    ViewCustomersComponent,
    CustomerDetailsComponent,
    LoginComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
