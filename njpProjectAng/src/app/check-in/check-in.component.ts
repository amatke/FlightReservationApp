import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

import {Checkin} from '../check-in/Checkin';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }

  //insert podataka u tabelu aktivnosti-kupovina
  checkIn(podaci){

    var jmbg = podaci.jmbg;
    for(let i=0; i<jmbg.length; i++){
      if(jmbg.charCodeAt(i) < 48 || jmbg.charCodeAt(i) > 57) {
        alert('JMBG mora da sadrzi samo cifre!');
        return 0;
      }
    }

    var idNumber = podaci.fnumber;
    for(let i=0; i<idNumber.length; i++){
      if(idNumber.charCodeAt(i) < 48 || idNumber.charCodeAt(i) > 57) {
        alert('Nispravan broj leta');
        return 0;
      }
    }

    if(podaci.fnumber.trim()=='' || podaci.fname.trim()=='' || podaci.lname.trim()=='' || podaci.jmbg.trim()=='') {

      alert('Niste popunili sva polja.');
      return 0;
    }

    sessionStorage.setItem('flyNumber', podaci.fnumber);
    sessionStorage.setItem('ime', podaci.fname);
    sessionStorage.setItem('prezime', podaci.lname);
    sessionStorage.setItem('jmbg', podaci.jmbg);


    this.http.get( 'http://localhost:8080/checkin/gate/' + podaci.fnumber )
      .subscribe( response => {
        if (response) {
          sessionStorage.setItem('gate', response.text());
        }
      });


    this.http.get( 'http://localhost:8080/checkin/isValid/' + podaci.fnumber + '/' + podaci.fname + '/' + podaci.lname )
      .subscribe( response => {
            if (response.json()) {     this.router.navigate(['/izborSedista']); }
            else { alert('Ne postoji kupljena karta za dati let i ime korisnika, ili ste se vec cekirali.')}
      });

  }

}
