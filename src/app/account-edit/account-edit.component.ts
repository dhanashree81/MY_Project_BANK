import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent {

  account : Account={
    id: 0,
    name: '',
    accno: 0
    
  };
  constructor(private accountService: AccountService, private route: ActivatedRoute,
    private router: Router,){}
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getAccount(id);
        console.log(id)
      });
    }
   
    getAccount(id:number)
    {
      this.accountService.getAccount(id).subscribe((data) => {
        this.account = data;
    });
  }
    
    updateAccount(): void {
      this.accountService.updateAccount(this.account)
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
