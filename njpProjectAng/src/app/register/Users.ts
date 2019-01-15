export class Users {
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  operator: boolean;
  admin: boolean;
  korisnik: boolean;
  changed: boolean;

  constructor(id: number, firstName: String, lastName: String, email: String, password: String, operator: boolean, admin: boolean, changed: boolean, korisnik: boolean){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.operator = operator;
    this.admin = admin;
    this.korisnik = korisnik;
    this.changed = changed;

  }

}
