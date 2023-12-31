import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './routeguards/auth.guard';
import {TokenComponent} from "./components/token/token.component";
import {NewPasswordComponent} from "./components/new-password/new-password.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SobreComponent} from "./components/about/sobre.component";
import {AddProductComponent} from "./components/dashboard/add-product/add-product.component";
import {StockComponent} from "./components/stock/stock.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'list-user', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'forgot', component: ForgotComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: SobreComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {
    roles: ['USER', 'ADMIN']
  }},
  { path: 'token', component: TokenComponent},
  { path: 'new-password', component: NewPasswordComponent},
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard], data: {
      roles: ['USER', 'ADMIN']
    }},
  { path: 'stock', component: StockComponent, canActivate: [AuthGuard], data: {
      roles: ['USER', 'ADMIN']
    }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
