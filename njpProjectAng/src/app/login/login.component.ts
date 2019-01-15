import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import {Users} from '../register/Users';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isChecked: boolean;
  user: Users = null;

  constructor(private http: Http, private router: Router, private cookieService: CookieService) { }

  ngOnInit() { }

  //radimo login proverom da li prosledjeni pdoaci postoje u bazi
  doLogin(rez){
    if (rez.username!='' && rez.pass!='') {
      this.http.get( 'http://localhost:8080/users/login/' + rez.username + '/' + rez.pass)
        .subscribe( response => {
          if (response.json().firstName != null) { //ako postoji korisnik u bazi
          let podaci = response.json();
          this.user = new Users(podaci.id, podaci.firstName, podaci.lastName, podaci.email, podaci.password, podaci.operator, podaci.admin, podaci.changed, podaci.korisnik);

          if (this.user.operator || this.user.admin) {
            if (!podaci.changed) {
              var odg = prompt("Molimo unesite novu sifru: ");
              if (odg != null) {
                this.http.get( 'http://localhost:8080/users/promenaSifre/' + odg + '/' + this.user.id)
                  .subscribe( response => {
                    if(response.json()){
                      alert('Uspesno ste promenili sifru.');
                      sessionStorage.setItem('changed', '1');
                    }
                  });
              }
            }
          }



          alert(this.user.firstName + ' ulogovan!');
          sessionStorage.setItem('firstName', podaci.firstName);
          sessionStorage.setItem('lastName', podaci.lastName);
          sessionStorage.setItem('email', podaci.email);
          sessionStorage.setItem('operator', podaci.operator);
          sessionStorage.setItem('admin', podaci.admin);
          sessionStorage.setItem('changed', podaci.changed);
          sessionStorage.setItem('korisnik', podaci.korisnik);

          //pravi cookies za ulogovanog
          if(this.isChecked){
            //this.remeberMe(podaci.email);
            this.remeberMe(podaci.id);
          }

          this.router.navigate(['']);
        } else {
          alert('Ne postoji uneti korisnik!');
        }
        } );
    } else {
      alert('Niste popunili polja.');
    }

  }


  check(id){
    var element = <HTMLInputElement> document.getElementById(id);
    this.isChecked = element.checked;
  }

  remeberMe(userID:String){
    var now = new Date(),
      // this will set the expiration to 12 months
      exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
    this.cookieService.set( 'userID', userID + '', exp);
  }




}
