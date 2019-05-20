import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { UpdateAccountRQ } from 'src/app/models/UpdateAccountRQ';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  transfer(iban1: string, iban2: string, amount: number) {
    const request = new UpdateAccountRQ(iban1, iban2, amount);
    this.rest.transfer(request).subscribe();
  }
}
