import { Component, OnInit } from '@angular/core';
import { Accountant } from '../accountant';
import { AccountantService } from '../accountant.service';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgForm } from '@angular/forms';

 
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
  onSubmit(accountant): void {
    
    this.accountantService.addAccountant(accountant as Accountant)
      .subscribe(accountant => {
        this.accountants.push(accountant);
      });
  }
  


}