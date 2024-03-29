import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { FormsModule }    from '@angular/forms';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { FacebookService }      from './facebook.service';
import { FBComponent }    from './facebook.component';
import { LoginFormComponent }   from './login-form.component';
import { RegisterFormComponent }from './register-form.component';
import { FriendComponent }      from './friend.component';
import { SendWindComponent }    from './SendWindComponent';
import { DisplayWindComponent } from './display-wind.component';
import { ShowWindComponent }    from './show-wind.component';
import { Cam }                  from './cam.component';
import { PasswordComponent }    from './password.component';

import { AppRoutingModule }     from './app-routing.module';

import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeroesComponent,
    FriendComponent,
    SendWindComponent,
    DisplayWindComponent,
    ShowWindComponent,
    Cam,
    PasswordComponent,
    FBComponent
    
  ],
  providers: [ HeroService,
  FacebookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


