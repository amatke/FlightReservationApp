import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ime = null;
  prezime = null;

  constructor(private router: Router, private http: Http, private cookieService: CookieService) { }

  ngOnInit() {




    this.ime = sessionStorage.getItem('firstName');
    this.prezime = sessionStorage.getItem('lastName');
    if (sessionStorage.getItem('firstName') == null) {

      // AKO POSTOJI PRETHODNO ULOGOVAN KORISNIK uzecemo id iz cookija i popuniit sesije
      //console.log('cookie id ' + this.cookieService.get('userID'))
      if(this.cookieService.get('userID')!= ""){
        this.popuniSesiju(this.cookieService.get('userID'));
        this.router.navigate(['']);
        //sessionStorage.setItem('firstName', this.cookieService.get('user'));
      }

      document.getElementById('logOut').hidden = true;
      document.getElementById('loginPage').hidden = false;

    } else {
      document.getElementById('logOut').hidden = false;
      document.getElementById('loginPage').hidden = true;
    }
    if(sessionStorage.getItem('operator') == 'true') {
      document.getElementById('checkIn').hidden = true;
      document.getElementById('otkazivanje').hidden = true;
      document.getElementById('register').hidden = true;
    }
    if(sessionStorage.getItem('korisnik') == 'true') {
      document.getElementById('avioni').hidden = true
      document.getElementById('register').hidden = true;
    }
    if(sessionStorage.getItem('admin') == 'true') {
      document.getElementById('korisnici').hidden = false;
    }
    if(sessionStorage.getItem('firstName') == null) {
      document.getElementById('letovi').hidden = true;
      document.getElementById('avioni').hidden = true;
      document.getElementById('istorija').hidden = true;
      document.getElementById('otkazivanje').hidden = true;
      document.getElementById('checkIn').hidden = true;
      document.getElementById('korisnici').hidden = true;

    }
  }

  doLogout(){
    if (sessionStorage.getItem('firstName') != null) {
      sessionStorage.clear();
      this.cookieService.delete( 'userID'); //brisemo cookie
      window.alert("Uspesno ste se izlogovali");
      document.getElementById('logOut').hidden = true;
      document.getElementById('loginPage').hidden = false;
      window.location.href="http://localhost:4200/";
    } else { window.alert("Niste prijavljeni!");  }
    this.router.navigate(['']);
  }


  //popunjavamo sesiju na osnovu id-a korisnika
  popuniSesiju(userID){
    this.http.get( 'http://localhost:8080/users/popuniSesiju/' + userID)
      .subscribe( response => {
        let podaci = response.json();
        sessionStorage.setItem('firstName', podaci.firstName);
        sessionStorage.setItem('lastName', podaci.lastName);
        sessionStorage.setItem('email', podaci.email);
        sessionStorage.setItem('operator', podaci.operator);
        sessionStorage.setItem('admin', podaci.admin);
        sessionStorage.setItem('changed', podaci.changed);
        sessionStorage.setItem('korisnik', podaci.korisnik);
        console.log('popunjena sesija');
        window.location.href = "http://localhost:4200/";
      });
  }

}
