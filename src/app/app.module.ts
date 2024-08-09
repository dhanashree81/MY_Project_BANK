import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountListComponent } from './account-list/account-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AccountCreateComponent,
    AccountEditComponent,
    AccountListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
