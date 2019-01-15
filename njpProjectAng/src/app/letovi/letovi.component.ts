import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

import { Letovi } from '../letovi/Letovi';
import {Kupovina} from '../register/Kupovina';


@Component({
  selector: 'app-letovi',
  templateUrl: './letovi.component.html',
  styleUrls: ['./letovi.component.css']
})
export class LetoviComponent implements OnInit {

  letovi: Letovi = null;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get( 'http://localhost:8080/letovi/all')
      .subscribe( response => {
        this.letovi = response.json();
      });

    if(sessionStorage.getItem('operator') == 'true' || sessionStorage.getItem('admin') == 'true') {
      document.getElementById('brisanjeLeta').hidden = false;
      document.getElementById('dodavanjeLeta').hidden = false;
      }
  }

  //kupovina karte za let, tj insert u tabelu kupovina
  kupi(id: number, polaziste: string, odrediste: string, datumIvremePolaska: string, datumIvremeDolaska: string, ukupnoVremePutovanja: string, gate: string, cena:number) {

    if(sessionStorage.getItem('operator') == 'true') {
      alert('Operater ne moze da kupuje karte.');
      return 0;
    }

    if(sessionStorage.getItem('firstName') == null) {
      alert('Morate se ulogovati da biste kupili kartu.');
      this.router.navigate(['/login']);
      return 0;
    }

    let ime = sessionStorage.getItem('firstName');
    let prezime = sessionStorage.getItem('lastName');
    let datumIvreme = datumIvremePolaska + ' || ' + datumIvremeDolaska;
    let destinacija = polaziste + " - " + odrediste;

    let karta: Kupovina = new Kupovina( '0', ime, prezime, id.toString(), destinacija, datumIvreme, cena, gate, false);

    this.http.post('http://localhost:8080/kupovina/add', karta)
      .subscribe(response => {
        if (response.json()) {

          let email = sessionStorage.getItem('email');
          this.http.post('http://localhost:8080/kupovina/mail2', karta)
            .subscribe(response => {
              if (response.json() == true) {alert('Poslata vam je karta na mail ' + email )}
            });

        } else { alert('Greska prilikom kupovine karte.'); }
      });



  }

  brisiLet(idLeta){

    this.http.get( 'http://localhost:8080/letovi/brisiLet/' + parseInt(idLeta.value))
      .subscribe( response => {
        if(response.json()) {
          alert('Let je izbrisan!');
        }
      });
  }

}
