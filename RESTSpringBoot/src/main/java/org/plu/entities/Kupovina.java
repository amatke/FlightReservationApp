package org.plu.entities;

import javax.persistence.*;

@Entity
@Table(name = "kupovina")
public class Kupovina {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String ime;

    private String prezime;

    private int id_leta;

    private String destinacija;

    private String datumIvreme;

    private int cena;

    private String gate;

    private boolean otkaziKartu;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public int getId_leta() {
        return id_leta;
    }

    public void setId_leta(int id_leta) {
        this.id_leta = id_leta;
    }

    public String getDestinacija() {
        return destinacija;
    }

    public void setDestinacija(String destinacija) {
        this.destinacija = destinacija;
    }

    public String getDatumIvreme() {
        return datumIvreme;
    }

    public void setDatumIvreme(String datumIvreme) {
        this.datumIvreme = datumIvreme;
    }

    public int getCena() {
        return cena;
    }

    public void setCena(int cena) {
        this.cena = cena;
    }

    public String getGate() {
        return gate;
    }

    public void setGate(String gate) {
        this.gate = gate;
    }

    public boolean isOtkaziKartu() {
        return otkaziKartu;
    }

    public void setOtkaziKartu(boolean otkaziKartu) {
        this.otkaziKartu = otkaziKartu;
    }
}
