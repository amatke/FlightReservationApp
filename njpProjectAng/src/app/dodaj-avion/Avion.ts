export class Avioni {
  id: number;
  marka: String;
  model: String;
  ukupnoSedista: number;
  redova: number;
  kolona: number;
  sedistaUKoloni: number;
  maxDolet: number;
  brzinaLetenja: number;

  constructor( id: number,marka: String, model: String, ukupnoSedista: number, redova: number, kolona: number, sedistaUKoloni: number, maxDolet: number, brzinaLetenja: number){
    this.id = id;
    this.marka = marka;
    this.model = model;
    this.ukupnoSedista = ukupnoSedista;
    this.redova = redova;
    this.kolona = kolona;
    this.sedistaUKoloni = sedistaUKoloni;
    this.maxDolet = maxDolet;
    this.brzinaLetenja = brzinaLetenja;
  }

}

