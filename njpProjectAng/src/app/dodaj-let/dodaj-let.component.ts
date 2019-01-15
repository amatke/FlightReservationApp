import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

import { Letovi } from '../letovi/Letovi';
import {Avioni} from '../dodaj-avion/Avion';
import {Users} from '../register/Users';


@Component({
  selector: 'app-dodaj-let',
  templateUrl: './dodaj-let.component.html',
  styleUrls: ['./dodaj-let.component.css']
})
export class DodajLetComponent implements OnInit {



  constructor(private router: Router, private http: Http) { }

  //:Car;
  //av: Array<Avioni>;




  ngOnInit(): void { }

  dodaj(podaci){

    var tipAviona = sessionStorage.getItem('markaAviona') + ' ' + sessionStorage.getItem('modelAviona');
    var brojSedista = parseInt(sessionStorage.getItem('ukupnoSedista'));
    var idAviona = parseInt(sessionStorage.getItem('idAviona'));

    var ukupnoVremePutovanja = '1:33';
    var gate = 'A5';


    var l = new Letovi( podaci.brLeta, podaci.polaziste, podaci.odrediste, podaci.datumIvremePolaska, podaci.datumIvremeDolaska, ukupnoVremePutovanja, podaci.razdaljina, gate, podaci.cena, brojSedista, 0, tipAviona, idAviona);
    //console.log(l);


    this.http.post('http://localhost:8080/letovi/add', l)
      .subscribe(response => {
        if (response.json()){
          alert('Dodat je novi let.');
          this.router.navigate(['/letovi']);
        }
      });

  }

  // cena
  // datum_ivreme_polaska
  // gate
  // ukupno_vreme_putovanja
  // id_aviona


   vratiDatumIvreme(str){
      var mesec = str.slice(0, 2);
      var dan = str.slice(4, 5);
      var godina = str.slice(6, 10);
      var sat = str.slice(11, 13);
      var minut = str.slice(14, 16);

      return new Date(parseInt(godina), parseInt(mesec), parseInt(dan), parseInt(sat), parseInt(minut), 0, 0);
   }

}
