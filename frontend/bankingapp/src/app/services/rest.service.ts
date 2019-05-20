import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  newCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.URL + '/customer', customer);
  }

  allCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL + '/customers');
  }
}
