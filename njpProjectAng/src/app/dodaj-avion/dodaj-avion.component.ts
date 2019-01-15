import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

import { Avioni } from '../dodaj-avion/Avion';


@Component({
  selector: 'app-dodaj-avion',
  templateUrl: './dodaj-avion.component.html',
  styleUrls: ['./dodaj-avion.component.css']
})
export class DodajAvionComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    if(sessionStorage.getItem('operator') == null) {
      this.router.navigate(['']);
      alert('Samo operater moze dodavati letove. Ulogujte se kao operater.');
    }
  }

  dodaj(podaci){

    let av = new Avioni(0, podaci.marka, podaci.model, podaci.ukSedista, podaci.redova, podaci.brkolona, podaci.sedistaUKoloni,podaci.maxDolet, podaci.brzLetenja);
    console.log(av);
    this.http.post('http://localhost:8080/avioni/add', av)
      .subscribe(response => {
        if (response.json()){
          alert('Dodat je novi avion.');
        }
      });
  }

}
