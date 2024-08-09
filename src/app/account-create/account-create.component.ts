import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent {

  newAccount: Account = {
    id: 1,
    name: 'dfs',
    accno: 123
  };
  constructor(private accountService: AccountService, private router:Router){}
  createAccount(): void {
    this.accountService.createAccount(this.newAccount)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/accounts"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }



}
