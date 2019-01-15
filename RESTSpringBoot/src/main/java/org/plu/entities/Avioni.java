package org.plu.entities;


//Njega definiše: registracija (mora biti jedinstvena), marka, model,
////        ukupni broj sedista, broj kolona I redova sedista,
////        broj sedista u jednoj koloni,  maksimalni dolet (izražen u kilometrima)
////        i brzina letenja (izražena u km/h).

import javax.persistence.*;

@Entity
@Table(name = "avioni")
public class Avioni {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String marka;

    private String model;

    private int ukupnoSedista;

    private int kolona;

    private int redova;

    private int sedistaUKoloni;

    private String maxDolet;

    private String brzinaLetenja;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarka() {
        return marka;
    }

    public void setMarka(String marka) {
        this.marka = marka;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getUkupnoSedista() {
        return ukupnoSedista;
    }

    public void setUkupnoSedista(int ukupnoSedista) {
        this.ukupnoSedista = ukupnoSedista;
    }

    public int getKolona() {
        return kolona;
    }

    public void setKolona(int kolona) {
        this.kolona = kolona;
    }

    public int getRedova() {
        return redova;
    }

    public void setRedova(int redova) {
        this.redova = redova;
    }

    public int getSedistaUKoloni() {
        return sedistaUKoloni;
    }

    public void setSedistaUKoloni(int sedistaUKoloni) {
        this.sedistaUKoloni = sedistaUKoloni;
    }

    public String getMaxDolet() {
        return maxDolet;
    }

    public void setMaxDolet(String maxDolet) {
        this.maxDolet = maxDolet;
    }

    public String getBrzinaLetenja() {
        return brzinaLetenja;
    }

    public void setBrzinaLetenja(String brzinaLetenja) {
        this.brzinaLetenja = brzinaLetenja;
    }
}
