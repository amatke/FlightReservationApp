import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import { Users } from '../register/Users';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  users: Users = null;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get( 'http://localhost:8080/users/all')
      .subscribe( response => {
        this.users = response.json();
      });
  }

  brisi(id) {
    this.http.get( 'http://localhost:8080/users/delete/' + id)
      .subscribe( response => {
        if(response.json()) {
          alert('Korisnik uspesno izbrisan.');
          this.router.navigate(['/korisnici']);
        }
      });
  }

}
