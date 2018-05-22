import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantDetailComponent } from './accountant-detail.component';

describe('AccountantDetailComponent', () => {
  let component: AccountantDetailComponent;
  let fixture: ComponentFixture<AccountantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
