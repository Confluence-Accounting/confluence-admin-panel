import { Component, OnInit, Input } from '@angular/core';
import { Accountant } from '../accountant';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AccountantService }  from '../accountant.service';


@Component({
  selector: 'app-accountant-detail',
  templateUrl: './accountant-detail.component.html',
  styleUrls: ['./accountant-detail.component.css']
})
export class AccountantDetailComponent implements OnInit {
  @Input() accountant: Accountant;
   
  constructor(
    private route: ActivatedRoute, //The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent.
    private accountantService: AccountantService, //The AccountantService gets hero data from the remote server and this component will use it to get the hero-to-display.


    private location: Location //The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.


  ) {}

  ngOnInit(): void {
    this.getAccountant();
  }
  
  getAccountant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountantService.getAccountant(id)
      .subscribe(accountant => this.accountant = accountant);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.accountantService.updateAccountant(this.accountant)
      .subscribe(() => this.goBack());
  }

}
