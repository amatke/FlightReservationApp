import { Component, OnInit } from '@angular/core';
import {Letovi} from '../letovi/Letovi';
import {forEach} from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {Checkin} from '../check-in/Checkin';

@Component({
  selector: 'app-izbor-sedista',
  templateUrl: './izbor-sedista.component.html',
  styleUrls: ['./izbor-sedista.component.css']
})
export class IzborSedistaComponent implements OnInit {

  redova = new Array();
  kolona = new Array('A', 'B', 'C', 'D', 'E','F');

  sedista = new Array();
  zauzeta = new Array();

  id_leta;
  ime;
  prezime;
  jmbg;
  sediste;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {

    this.id_leta = sessionStorage.getItem('flyNumber');
    this.ime = sessionStorage.getItem('ime');
    this.prezime = sessionStorage.getItem('prezime');
    this.jmbg = sessionStorage.getItem('jmbg');
    this.sediste = "";


    this.redova.length = 30;
    for(let i=0; i<this.redova.length; i++){
      this.redova[i] = i;
    }



    this.http.get( 'http://localhost:8080/checkin/rezervisanaMesta/' +  this.id_leta )
      .subscribe( response => {
        this.zauzeta = response.json();
        this.zauzeta.forEach(function(sed) {
          document.getElementById(sed).style.backgroundColor = "RED";
          document.getElementById(sed).setAttribute('disabled', 'disabled');          //console.log(sed);
        });
      });


  }

  //dodajemo u niz koji cemo upisati u bazu
  zaRezervisanje(k: string, j: string){

    if(this.sedista.length != 0) {
      alert('Vec ste odabrali mesto.');
      return 0;
    }
    else {
      alert('Sediste: ' + k + j);
      document.getElementById(k + j).style.backgroundColor = "GREEN";
      this.sedista.push(k + j);
    }
  }

  //insert rezervisanih sedista u bazu
  //potvrda rezervisanih mesta
  //setovanje boje na crvenu (zauzeto)
  rezervisi() {

    alert('REZERVISANO JE SEDISTE: ' + this.sedista);

    var gate = sessionStorage.getItem('gate');
    var email = sessionStorage.getItem('email');
    let boardKarta = new Checkin(0, this.id_leta, this.ime, this.prezime, this.jmbg, this.sedista[0], gate, email);

    this.http.post('http://localhost:8080/checkin/rezervisi', boardKarta)
      .subscribe(response => {
        if (response.json()) {

          let email = sessionStorage.getItem('email');
          this.http.post('http://localhost:8080/checkin/mail3', boardKarta)
            .subscribe(response => {
              if (response.json() == true) {
                alert('Uspesno ste se cekirali. Poslata vam je boarding karta na email ' + email );
              }
            });
          this.router.navigate(['']);

        } else {
          alert('Neuspesno cekiranje. Greska..');
        }
      });

  }

}
