import { Component, OnInit } from '@angular/core';
import { Accountant } from '../accountant';
import { AccountantService } from '../accountant.service';

 
@Component({
  selector: 'app-accountants',
  templateUrl: './accountants.component.html',
  styleUrls: ['./accountants.component.css']
})
export class AccountantsComponent implements OnInit {
  accountants: Accountant[];
 
  constructor(private accountantService: AccountantService) { }

  ngOnInit() {
    this.getAccountants();
  }



  getAccountants(): void {
    this.accountantService.getAccountants()
     .subscribe(accountants => this.accountants = accountants); 
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.accountantService.addAccountant({ name } as Accountant)
      .subscribe(accountant => {
        this.accountants.push(accountant);
      });
  }


}