import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantsComponent }      from './accountants/accountants.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AccountantDetailComponent }  from './accountant-detail/accountant-detail.component';

const routes: Routes = [
    { path: 'detail/:id', component: AccountantDetailComponent },
    {path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //To make the app navigate to the dashboard automatically, add the following route to the AppRoutingModule.Routes array.
    {path: 'dashboard', component: DashboardComponent} ,
    {path: 'accountants', component: AccountantsComponent } //the router will match that URL to path: 'heroes' and display the HeroesComponent.
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

//  Route has two properties: 1) path: a string that matches the URL in the browser address bar. 2) component: the component that the router should create when navigating to this route.

