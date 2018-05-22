import { Component, OnInit } from '@angular/core';
import { Accountant } from '../accountant';
import { AccountantService } from '../accountant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  accountants: Accountant[] = [];

  constructor(private accountantService: AccountantService) { }

  ngOnInit() {
    this.getAccountants();
  }

  getAccountants(): void {        //This getHeroes reduces the number of heroes displayed to four (2nd, 3rd, 4th, and 5th).
    this.accountantService.getAccountants()
      .subscribe(accountants => this.accountants = accountants.slice(1, 5));
  }
}