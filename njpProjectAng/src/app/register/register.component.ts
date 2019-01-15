import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Users } from '../register/Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  privilegija : string = 'korisnik';


  constructor(private router: Router, private http: Http) { }

  ngOnInit() {

    if(sessionStorage.getItem('admin') == 'true') {
      document.getElementById('adminInput').hidden = false;
      document.getElementById('operaterInput').hidden = false;
    } else {
      document.getElementById('adminInput').hidden = true;
      document.getElementById('operaterInput').hidden = true;
    }
  }

  public doRegister(podaci) {

    if (podaci.pass != podaci.cpass) {
      alert('Password se ne podudara!');
    }
    else if (podaci.fname=='' || podaci.lname=='' || podaci.email=='' || podaci.pass=='' || podaci.cpass=='') {
      alert('Niste popunili sva polja!');
    }
    else {

      if(sessionStorage.getItem('admin') == 'true') {
        var p: Users = new Users(0 ,podaci.fname, podaci.lname, podaci.email, podaci.pass, podaci.operator, podaci.admin, false, false);
      } else {
        var p: Users = new Users(0 ,podaci.fname, podaci.lname, podaci.email, podaci.pass, false, false, false, true);
      }

      // if(podaci.admin == 'true'){
      //   this.privilegija = "admin";
      // } else if(podaci.operator == 'true'){
      //   this.privilegija = "operator";
      // } else if(podaci.operator == 'true'){
      //   this.privilegija = "korisnik";
      // }


      this.http.post('http://localhost:8080/users/aktMail', p)
        .subscribe(response => {
            if(response.json()){
              alert('Postovani, poslat vam je je aktivacioni mail na vasu adresu: ' + p.email);
            }
        });

      this.router.navigate(['']);
    }
  }

  uncheck(toUncheck: string){

    var element = <HTMLInputElement> document.getElementById(toUncheck);
    var isChecked = element.checked;

    if(toUncheck == "admin") {
      document.getElementById("operater").setAttribute("disabled", "true");
      if (!isChecked) {
        document.getElementById("operater").removeAttribute("disabled");
      }
    } else {
      document.getElementById("admin").setAttribute("disabled", "true");
      if(!isChecked ) {
        document.getElementById("admin").removeAttribute("disabled");
      }
    }
  }

}
