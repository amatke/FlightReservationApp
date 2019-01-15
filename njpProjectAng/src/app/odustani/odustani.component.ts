import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-odustani',
  templateUrl: './odustani.component.html',
  styleUrls: ['./odustani.component.css']
})
export class OdustaniComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }

  //otkazivanje kupljene karte ili cekiranog leta
  odustani(podaci){

    this.http.get( 'http://localhost:8080/kupovina/otkazi/' + podaci.fnumber + '/' + podaci.fname )
      .subscribe( response => {
        if (response.json()) { alert('Uspesno ste otkazali kartu.')}
        else { alert('Ne mozete da otkazete kartu.')}
      });

  }

}
