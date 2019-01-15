import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {Letovi} from '../letovi/Letovi';
import {Kupovina} from '../register/Kupovina';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-istorija',
  templateUrl: './istorija.component.html',
  styleUrls: ['./istorija.component.css']
})
export class IstorijaComponent implements OnInit {

  kupljeno: Kupovina = null;
  korisnik = null;
  istorijaKupljeno: Kupovina = null;
  //otkazaneKarte: Kupovina = null;


  constructor(private router: Router, private http: Http) { }

  ngOnInit() {

    if(sessionStorage.getItem('operator') == 'true' || sessionStorage.getItem('admin') == 'true'){
      document.getElementById('div1').hidden = true;
    } else if (sessionStorage.getItem('korisnik') == 'true' ) {
      document.getElementById('div2').hidden = true;
    }

    this.korisnik = sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName');


    let ime = sessionStorage.getItem('firstName');
    let prezime = sessionStorage.getItem('lastName');

    this.http.get( 'http://localhost:8080/kupovina/istorijaKorisnika/' + ime + '/' + prezime )
      .subscribe( response => {
        this.kupljeno = response.json();
      });

    this.http.get( 'http://localhost:8080/kupovina/all/' )
      .subscribe( response => {
        this.istorijaKupljeno = response.json();
      });

    // this.http.get( 'http://localhost:8080/kupovina/otkazaneKarte/' + ime + '/' + prezime)
    //   .subscribe( response => {
    //     console.log(response.json());
    //     //if (response.json() != null)
    //      this.otkazaneKarte = response.json();
    //   });

  }

}
