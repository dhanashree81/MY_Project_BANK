import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  accounts : Account[]=[];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadservices();
  }

  loadservices(): void {
    this.accountService.getAccounts()
      .subscribe(c => this.accounts = c);
  }

  deleteAccount(id: number): void {
    this.accountService.deleteAccount(id)
      .subscribe(() => {
        this.loadservices();
      });
  }


}
