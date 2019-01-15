import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import { Avioni } from '../dodaj-avion/Avion';

@Component({
  selector: 'app-avioni',
  templateUrl: './avioni.component.html',
  styleUrls: ['./avioni.component.css']
})
export class AvioniComponent implements OnInit {

  avioni: Avioni = null;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {

    this.http.get( 'http://localhost:8080/avioni/all')
      .subscribe( response => {
        this.avioni = response.json();
      });

    if(sessionStorage.getItem('operator') == 'true' || sessionStorage.getItem('admin') == 'true') {
      document.getElementById('brisanjeAviona').hidden = false;
    }
  }

  dodaj(id, marka, model, ukupnoSedista) {
    sessionStorage.setItem('idAviona', id);
    sessionStorage.setItem('markaAviona', marka);
    sessionStorage.setItem('modelAviona', model);
    sessionStorage.setItem('ukupnoSedista', ukupnoSedista);

    this.router.navigate(['/dodajLet']);
  }

  brisiAvion(idAviona){
    this.http.get( 'http://localhost:8080/avioni/brisiAvion/' + parseInt(idAviona.value))
      .subscribe( response => {
        if(response.json()) {
          alert('Avion je izbrisan!');
        }
      });
  }

}
