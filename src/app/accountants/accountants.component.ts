import { Component, OnInit } from '@angular/core';
import { Accountant } from '../accountant';
import { ACCOUNTANTS } from '../mock-accountants';
 
@Component({
  selector: 'app-accountants',
  templateUrl: './accountants.component.html',
  styleUrls: ['./accountants.component.css']
})
export class AccountantsComponent implements OnInit {
 accountants = ACCOUNTANTS;
 
  selectedAccountant: Accountant;
 
 
  constructor() { }
 
  ngOnInit() {
  }
 
}

