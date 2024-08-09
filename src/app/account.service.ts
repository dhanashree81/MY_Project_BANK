import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/home';

   getAccounts() {
    return this.http.get<Account[]>(this.apiUrl);
  }

  getAccount(id: number) {
    return this.http.get<Account>(`${this.apiUrl}/${id}`);
  }

  createAccount(Account: Account) {
    return this.http.post<Account>(this.apiUrl, Account);
  }

  updateAccount(Account: Account) {
    return this.http.put<Account>(this.apiUrl, Account);
  }

  deleteAccount(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
