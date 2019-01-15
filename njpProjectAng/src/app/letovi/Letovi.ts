export class Letovi {
  id: number;
  polaziste: String;
  odrediste: String;
  datumIvremePolaska: String;
  datumIvremeDolaska: String;
  ukupnoVremePutovanja: String;
  razdaljinaDestinacija: String;
  gate: String;
  cena: number;
  brojSedista: number;
  zauzetihSedista: number;
  tipAviona: String;
  idAviona: number;

  constructor(  id: number, polaziste: String, odrediste: String, datumIvremePolaska: String, datumIvremeDolaska: String, ukupnoVremePutovanja: String, razdaljinaDestinacija: String, gate: String, cena: number, brojSedista: number, zauzetihSedista: number, tipAviona: String, idAviona: number){
    this.id = id;
    this.polaziste = polaziste;
    this.odrediste = odrediste;
    this.datumIvremePolaska = datumIvremePolaska;
    this.datumIvremeDolaska = datumIvremeDolaska;
    this.ukupnoVremePutovanja = ukupnoVremePutovanja;
    this.razdaljinaDestinacija = razdaljinaDestinacija;
    this.gate = gate;
    this.cena = cena;
    this.brojSedista = brojSedista;
    this.zauzetihSedista = zauzetihSedista;
    this.tipAviona = tipAviona;
    this.idAviona = idAviona
  }
  //id 	 	datum_ivreme_dolaska 	datum_ivreme_polaska 	 	 	 	razdaljina_destinacija 	ukupno_vreme_putovanja 	id_aviona
}
