package org.plu.rest.controllers;


import org.plu.dao.CheckinRepository;
import org.plu.dao.KupovinaRepository;
import org.plu.dao.LetoviRepository;
import org.plu.entities.CheckIn;
import org.plu.entities.Kupovina;
import org.plu.entities.Letovi;
import org.plu.entities.Users;
import org.plu.rest.controllers.rest.mail.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/checkin")
@CrossOrigin
public class CheckinController {

    @Autowired
    CheckinRepository checkinRepository;

    @Autowired
    KupovinaRepository kupovinaRepository;

    @Autowired
    LetoviRepository letoviRepository;

    //TO DO METODE

    // get all check in
    @GetMapping("/all")
    public List<CheckIn> addUser() {
        return checkinRepository.findAll();
    }

    // vracamo sva rezervisana sedista
    @GetMapping("/rezervisanaMesta/{idLeta}")
    public ArrayList<String> rezervisanaMesta(@PathVariable(value = "idLeta") int idLeta) {

        ArrayList<String> zauzeta = new ArrayList<>();

        for(CheckIn ch: checkinRepository.findAll()) {
            if(idLeta == ch.getId_leta()) {
                zauzeta.add(ch.getSediste());
            }
        }
        return zauzeta;
    }



    // dodajemo nova rezervisana sedista
    @PostMapping("/rezervisi")
    public boolean rezervisi(@RequestBody CheckIn boardKarta) {
        //checkinRepository.save(boardKarta);
        //System.out.println(boardKarta);

        for (Kupovina k: kupovinaRepository.findAll()) {
            //System.out.println("gate " + k.getGate());
            if(boardKarta.getId_leta() == k.getId_leta() && boardKarta.getIme().equals(k.getIme()) && !k.isOtkaziKartu()) {
                boardKarta.setGate(k.getGate());
                checkinRepository.save(boardKarta);
                return true;
            }
        }
        return false;
    }



    // provera da li prethodno postoji kupljena karata za dati broj leta i ime
    // i provera da li je vec cekirana data karta
    // ako je vec cekiarana vracamo false, inace true
    @GetMapping("/isValid/{idLeta}/{ime}/{prezime}")
    public boolean isValid(@PathVariable(value = "idLeta") int idLeta, @PathVariable(value = "ime") String ime, @PathVariable(value = "prezime") String prezime  ){

        boolean toRet = false;

        for (Kupovina k: kupovinaRepository.findAll()) {
            if(idLeta == k.getId_leta() && ime.equals(k.getIme()) && prezime.equals(k.getPrezime()) && !k.isOtkaziKartu()) {
                System.out.println("k idleta "+k.getId_leta() + " k ime " + k.getIme() + " k prezime " + k.getPrezime());
                toRet = true;
                for (CheckIn ch: checkinRepository.findAll()) { //ako je vec cekirana onda je nevalidna karta
                    if(idLeta == ch.getId_leta() && ime.equals(ch.getIme()) && prezime.equals(ch.getPrezime())) {
                        toRet = false;
                    }
                }
            }
        }
        return toRet;
    }




    // slanje boarding karte na mail korisnika
    @PostMapping("/mail3")
    public boolean mail2( @RequestBody CheckIn karta) {

        String destinacija = null;
        String vremePolaska = null;
        String vremeDolaska = null;
        for (Letovi let: letoviRepository.findAll()) {
            if(let.getId() == karta.getId_leta()) {
                destinacija = let.getPolaziste() + " - " + let.getOdrediste();
                vremePolaska = let.getDatumIvremePolaska();
                vremeDolaska = let.getDatumIvremeDolaska();
            }
        }

        String sadrzaj = "<H3 align='center'>Boarding karta</H3> <br>"
                + "<hr> <p> <b> ID leta: </b>" + karta.getId_leta()
                + "</p> <hr> <p> <b>Ime: </b>" + karta.getIme()
                + "</p> <hr> <p> <b>Prezime: </b>" +karta.getPrezime()
                + "</p> <hr> <p> <b>Sediste: </b>" + karta.getSediste()
                + "</p> <hr> <p> <b>Destinacija: </b>" + destinacija
                + "</p> <hr> <p> <b>Vreme polaska: </b>" + vremePolaska
                + "</p> <hr> <p> <b>Vreme dolaska: </b>" + vremeDolaska
                + "</p> <hr> <p> <b>Gate: </b>" + karta.getGate() + "<p> <hr>";

        return Mail.sendMail(karta.getEmail(), sadrzaj);
    }


    // provera da li postoji kupljena karata za dati broj leta i ime
    // i provera da li je vec cekirana data karta
    @GetMapping("/gate/{idLeta}")
    public String gate(@PathVariable(value = "idLeta") int idLeta){

        for (Kupovina k: kupovinaRepository.findAll()) {
            if(idLeta == k.getId_leta()) {
                return k.getGate();
            }
        }
        return null;
    }

}
