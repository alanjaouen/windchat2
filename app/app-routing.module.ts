import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { LoginFormComponent }   from './login-form.component';
import { RegisterFormComponent }from './register-form.component';
import { FriendComponent }      from './friend.component';
import { SendWindComponent }    from './SendWindComponent';
import { DisplayWindComponent } from './display-wind.component';
import { ShowWindComponent } from './show-wind.component';
import { PasswordComponent }    from './password.component';
import { FBComponent }    from './facebook.component';





const routes: Routes = [
    { path: '',           redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'login',      component: LoginFormComponent },
    { path: 'register',   component: RegisterFormComponent },
    { path: 'detail',     component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent },
    { path: 'friends',    component: FriendComponent },
    { path: 'winds',      component: SendWindComponent },
    { path: 'display',    component: DisplayWindComponent },
    { path: 'show',       component: ShowWindComponent },
    { path: 'pass',       component: PasswordComponent },
    { path: 'fb',       component: FBComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

