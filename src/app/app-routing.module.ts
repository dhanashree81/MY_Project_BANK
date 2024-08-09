import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountEditComponent } from './account-edit/account-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountListComponent },
  { path: 'accounts/create', component: AccountCreateComponent },
  { path: 'accounts/edit/:id', component: AccountEditComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
