import { authGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { SocialCallbackComponent } from './components/social-callback/social-callback.component';
import { AccountComponent } from './components/home/account/account.component';
import { SocialFailureComponent } from './components/social-callback/social-failure/social-failure.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/success', component: SocialCallbackComponent },
  { path: 'login/failure', component: SocialFailureComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'account', component: AccountComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
