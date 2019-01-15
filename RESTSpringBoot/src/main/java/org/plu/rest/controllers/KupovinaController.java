package org.plu.rest.controllers;

import org.plu.dao.KupovinaRepository;
import org.plu.dao.LetoviRepository;
import org.plu.dao.UsersRepository;
import org.plu.entities.Kupovina;
import org.plu.entities.Letovi;
import org.plu.entities.Users;
import org.plu.rest.controllers.rest.mail.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/kupovina")
@CrossOrigin
public class KupovinaController {

    @Autowired
    KupovinaRepository kupovinaRepository;

    @Autowired
    LetoviRepository letoviRepository;

    @Autowired
    UsersRepository usersRepository;

    //TO DO METODE

    // get all kupovina
    @GetMapping("/all")
    public List<Kupovina> getAll() {

        return kupovinaRepository.findAll();
    }

    // kupovina karte i azuriranje sedista
    @PostMapping("/add")
    public Boolean kupiKartu(@RequestBody Kupovina kupovina) {

        Letovi let = letoviRepository.findOne(new Long(kupovina.getId_leta()));
        let.setZauzetihSedista(let.getZauzetihSedista() + 1);
        letoviRepository.save(let);

        kupovinaRepository.save(kupovina);

        return true;
    }

    // update kupovina kartte
    @GetMapping("/otkazi/{fnumber}/{ime}")
    public boolean otkaziKartu(@PathVariable(value = "fnumber") String fnumber, @PathVariable(value = "ime") String ime) {

        for (Kupovina k: kupovinaRepository.findAll()) {
            if(Integer.parseInt(fnumber) == k.getId_leta() && ime.equals(k.getIme())) {
                Kupovina zaOtkaz = kupovinaRepository.findOne(k.getId());
                zaOtkaz.setOtkaziKartu(true);
                kupovinaRepository.save(zaOtkaz);
                return true;
            }
        }

        return false;
    }



    // vracamo sve otkazane karte datog korisnika
//    @GetMapping("/otkazaneKarte/{ime}/{prezime}")
//    public List<Kupovina> otkazaneKarte(@PathVariable(value = "ime") String ime,
//                                        @PathVariable(value = "prezime") String prezime) {
//        List<Kupovina> otkazaneKarte = new ArrayList<>();
//        for (Kupovina k: kupovinaRepository.findAll()) {
//            if(k.isOtkaziKartu() && k.getIme().equals(ime) && k.getPrezime().equals(prezime)) {
//                otkazaneKarte.add(k);
//            }
//        }
//        return otkazaneKarte;
//    }

    // slanje kupljene karte na mail korisnika
    @PostMapping("/mail2")
    public boolean mail2(@RequestBody Kupovina kup) {
        String email = null;
        for(Users user: usersRepository.findAll()) {
            if(user.getFirstName().equals(kup.getIme())){
                email = user.getEmail();
            }
        }

        for(Kupovina k: kupovinaRepository.findAll()){
            if(k.getId_leta() == kup.getId_leta() && k.getIme().equals(kup.getIme())){
                kup.setId(k.getId());
            }
        }

        String sadrzaj = "<H3 align='center'>Avionska karta</H3>"
                + "<hr> <p> <b>ID karte: </b>" + kup.getId()
                + "</p> <hr> <p> <b>Destinacija: </b>" + kup.getDestinacija()
                + "</p> <hr> <p> <b>ID leta: </b>" + kup.getId_leta()
                + "</p> <hr> <p> <b>Datum i vreme (polaska-dolaska): </b>" + kup.getDatumIvreme()
                + "</p> <hr> <p> <b>Ime: </b>" + kup.getIme()
                + "</p> <hr> <p> <b>Prezime: </b>" +kup.getIme()
                + "</p> <hr> <p> <b>Cena: </b>" +kup.getCena() + "</p>";

        return Mail.sendMail(email, sadrzaj);
    }

    // vraca svu istoriju kupovine karata datog korisnika
    @GetMapping("/istorijaKorisnika/{ime}/{prezime}")
    public List<Kupovina> istorijaKorisnika(@PathVariable(value = "ime") String ime,
                                            @PathVariable(value = "prezime") String prezime) {
        List<Kupovina> toRet = new ArrayList<Kupovina>();

        for(Kupovina kup: kupovinaRepository.findAll()){
            if(kup.getIme().equals(ime) && kup.getPrezime().equals(prezime)){
                toRet.add(kup);
            }
        }
        return toRet;
    }


}