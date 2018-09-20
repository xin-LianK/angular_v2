import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutes } from './account.routing';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutes
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
    IndexComponent
  ]
})
export class AccountModule { }
