import { Injectable } from '@angular/core';
import { Accountant } from './accountant';
import { ACCOUNTANTS } from './mock-accountants';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  private accountantsUrl = 'http://localhost/conf-admin-server/public/api/accountant';  // URL to web api
  private accountantsputUrl = 'http://localhost/conf-admin-server/public/api/accountant/{accountant}';  // URL to web api


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // GET accountants from the server 
  getAccountants (): Observable<Accountant[]> {
    return this.http.get<Accountant[]>(this.accountantsUrl)
  
  }
  //GET accountant bij id,. Will 404 if id not found 
  getAccountant(id: number): Observable<Accountant> {
    const url = `${this.accountantsUrl}/${id}`;
    return this.http.get<Accountant>(url)
  }
  /** PUT: update the accountant on the server */
  updateAccountant (accountant: Accountant): Observable<any> {
    return this.http.put(this.accountantsputUrl, accountant, httpOptions)
}
/** POST: add a new accountant to the server */
  addAccountant (accountant: Accountant): Observable<Accountant> {
    return this.http.post<Accountant>(this.accountantsUrl, accountant, httpOptions)
}

  /** Log a AccountantService message with the MessageService */
    private log(message: string) {
    this.messageService.add('AccountantService: ' + message);
  }
  }
