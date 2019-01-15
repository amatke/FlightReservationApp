export class Kupovina {
  id: String;
  ime: String;
  prezime: String;
  id_leta: String;
  destinacija: String;
  datumIvreme: String;
  cena: number;
  gate: String;
  otkaziKartu: boolean;


  constructor( id: String,ime: String, prezime: String, id_leta: String, destinacija: String, datumIvreme: String, cena: number, gate: String, otkaziKartu: boolean){
    this.id = id;
    this.ime = ime;
    this.prezime = prezime;
    this.id_leta = id_leta;
    this.destinacija = destinacija;
    this.datumIvreme = datumIvreme;
    this.cena = cena;
    this.gate = gate;
    this.otkaziKartu = otkaziKartu;
  }

}
