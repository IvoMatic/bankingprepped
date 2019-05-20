import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { LoginComponent } from './components/login/login.component';
import { TransferComponent } from './components/transfer/transfer.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'addAccount',
        component: AddAccountComponent
    },
    {
        path: 'addCustomer',
        component: NewCustomerComponent
    },
    {
        path: 'allCustomers',
        component: ViewCustomersComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'transfer',
        component: TransferComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }