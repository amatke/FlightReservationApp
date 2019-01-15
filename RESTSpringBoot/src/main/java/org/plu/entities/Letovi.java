package org.plu.entities;

//Definše: broj leta (mora biti jedinstven, ali mogu da budu dva ista
//        leta ukoliko ide svakog dana na istoj destinaciji),
//        polazište, odredište, datum i vreme polaska,
//        datum i vreme dolasta, ukupno vreme putovanja,
//        razdaljina između destinacija, gate (polazak).

import javax.persistence.*;

@Entity
@Table(name = "letovi")
public class Letovi {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String polaziste;

    private String odrediste;

    private String datumIvremePolaska;

    private String datumIvremeDolaska;

    private String ukupnoVremePutovanja;

    private String razdaljinaDestinacija;

    private String gate;

    private int cena;

    private String tipAviona;

    private int brojSedista;

    private int zauzetihSedista;

    private int idAviona;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPolaziste() {
        return polaziste;
    }

    public void setPolaziste(String polaziste) {
        this.polaziste = polaziste;
    }

    public String getOdrediste() {
        return odrediste;
    }

    public void setOdrediste(String odrediste) {
        this.odrediste = odrediste;
    }

    public String getDatumIvremePolaska() {
        return datumIvremePolaska;
    }

    public void setDatumIvremePolaska(String datumIvremePolaska) {
        this.datumIvremePolaska = datumIvremePolaska;
    }

    public String getDatumIvremeDolaska() {
        return datumIvremeDolaska;
    }

    public void setDatumIvremeDolaska(String datumIvremeDolaska) {
        this.datumIvremeDolaska = datumIvremeDolaska;
    }

    public String getUkupnoVremePutovanja() {
        return ukupnoVremePutovanja;
    }

    public void setUkupnoVremePutovanja(String ukupnoVremePutovanja) {
        this.ukupnoVremePutovanja = ukupnoVremePutovanja;
    }

    public String getRazdaljinaDestinacija() {
        return razdaljinaDestinacija;
    }

    public void setRazdaljinaDestinacija(String razdaljinaDestinacija) {
        this.razdaljinaDestinacija = razdaljinaDestinacija;
    }

    public String getGate() {
        return gate;
    }

    public void setGate(String gate) {
        this.gate = gate;
    }

    public int getCena() {
        return cena;
    }

    public void setCena(int cena) {
        this.cena = cena;
    }

    public String getTipAviona() {
        return tipAviona;
    }

    public void setTipAviona(String tipAviona) {
        this.tipAviona = tipAviona;
    }

    public int getBrojSedista() {
        return brojSedista;
    }

    public void setBrojSedista(int brojSedista) {
        this.brojSedista = brojSedista;
    }

    public int getZauzetihSedista() {
        return zauzetihSedista;
    }

    public void setZauzetihSedista(int zauzetihSedista) {
        this.zauzetihSedista = zauzetihSedista;
    }

    public int getIdAviona() {
        return idAviona;
    }

    public void setIdAviona(int idAviona) {
        this.idAviona = idAviona;
    }
}
