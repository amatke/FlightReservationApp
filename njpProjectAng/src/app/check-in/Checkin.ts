export class Checkin {
  id: number;
  id_leta: String;
  ime: String;
  prezime: String;
  jmbg: String;
  sediste: String;
  gate: String;
  email: String;


  constructor( id: number, id_leta: String, ime: String, prezime: String, jmbg: String, sediste: String, gate: String, email: String){
    this.id = id;
    this.id_leta = id_leta;
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.sediste = sediste;
    this.gate = gate;
    this.email = email;
  }

}
