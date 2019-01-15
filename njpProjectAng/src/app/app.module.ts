import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LetoviComponent } from './letovi/letovi.component';
import { CheckInComponent } from './check-in/check-in.component';
import { OdustaniComponent } from './odustani/odustani.component';
import { IstorijaComponent } from './istorija/istorija.component';
import { DodajAvionComponent } from './dodaj-avion/dodaj-avion.component';
import { IzborSedistaComponent } from './izbor-sedista/izbor-sedista.component';
import { DodajLetComponent } from './dodaj-let/dodaj-let.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { AvioniComponent } from './avioni/avioni.component';

import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LetoviComponent,
    CheckInComponent,
    OdustaniComponent,
    IstorijaComponent,
    DodajAvionComponent,
    IzborSedistaComponent,
    DodajLetComponent,
    KorisniciComponent,
    AvioniComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([{path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'letovi', component: LetoviComponent},
      {path: 'checkIn', component: CheckInComponent},
      {path: 'odustani', component: OdustaniComponent},
      {path: 'istorija', component: IstorijaComponent},
      {path: 'dodajAvion', component: DodajAvionComponent},
      {path: 'izborSedista', component: IzborSedistaComponent},
      {path: 'dodajLet', component: DodajLetComponent},
      {path: 'korisnici', component: KorisniciComponent},
      {path: 'avioni', component: AvioniComponent}])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
