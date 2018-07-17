import { Injectable } from '@angular/core';
import { Account } from './AccountClass';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private objAccount: Account;

  constructor(private _http: HttpClient) { }
  createAccData(objAccount: Account) {
    return this._http.post(this.baseUri + '/create', objAccount, { headers: this.headers })
  }
  GetAccData() {
    return this._http.get(this.baseUri + '/read', { headers: this.headers })
  }
}
