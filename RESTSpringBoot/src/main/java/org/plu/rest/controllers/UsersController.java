package org.plu.rest.controllers;

import org.plu.dao.UsersRepository;
import org.plu.entities.Kupovina;
import org.plu.entities.Users;
import org.plu.rest.controllers.rest.mail.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UsersController {

    @Autowired
    UsersRepository usersRepository;

    // get all users
    @GetMapping("/all")
    public List<Users> addUser() {
        return usersRepository.findAll();
    }

    // get all users
    @GetMapping("/login/{username}/{password}")
    public Users login(@PathVariable(value = "username") String username, @PathVariable(value = "password") String password){
        List<Users> users = usersRepository.findAll();
        for (Users u: users) {
            if(username.equals(u.getEmail())) {
                if (password.equals(u.getPassword())) {
                    return u;
                }
            }
        }
        return new Users();
    }


    // Create a new User
    @PostMapping("/add")
    public boolean addUser(@RequestBody Users user) {
        usersRepository.save(user);
        return true;
    }


    // slanje mail-a da je korisnik registrovan
    @PostMapping("/mail")
    public boolean mail(@RequestBody Users user) {

        String sadrzaj = "Postovani " + user.getFirstName()
                + ", uspesno ste se registrovali! Vasa sifra je " + user.getPassword();

        return Mail.sendMail(user.getEmail(), sadrzaj);
    }



    // get all check in
    @GetMapping("/promenaSifre/{sifra}/{id}")
    public boolean promeniSifru(@PathVariable(value = "sifra") String sifra, @PathVariable(value = "id") Long id) {

        Users u = usersRepository.findOne(id);
        u.setPassword(sifra);
        u.setChanged(true);
        usersRepository.save(u);
        return true;
    }

    // brisi korisnika
    @GetMapping("/delete/{id}")
    public boolean brisiKorisnika(@PathVariable(value = "id") int id) {
        usersRepository.delete(new Long(id));
        return true;
    }

    // vraca usera na osnovu id-a
    @GetMapping("/popuniSesiju/{id}")
    public Users popuniSesiju(@PathVariable(value = "id") int id) {
        return usersRepository.findOne(new Long(id));
    }

//---

    // Create a new User
    @PostMapping("/aktMail")
    public boolean aktMail(@RequestBody Users user) {

        String privilegija = "korisnik";
        if(user.isAdmin()) {
            privilegija = "admin";
        } else if(user.isOperator()) {
            privilegija = "operater";
        }

        String sadrzaj = "Postovani korisnice " + user.getFirstName() + ", <br> kliknite na link kako biste aktivirali nalog: <br>"
                + "http://localhost:8080/users/registracijaKorisnika"
                + "/" + user.getFirstName()
                + "/" + user.getLastName()
                + "/" + user.getEmail()
                + "/" + user.getPassword()
                + "/" + privilegija;

        Mail.sendMail(user.getEmail(), sadrzaj);
        return true;
    }

    //met2
    @CrossOrigin
    @GetMapping("/registracijaKorisnika/{ime}/{prezime}/{email}/{password}/{privilegija}")
    public String registracijaKorisnika(@PathVariable(value = "ime") String ime,
                                         @PathVariable(value = "prezime") String prezime,
                                         @PathVariable(value = "email") String email,
                                         @PathVariable(value = "password") String password,
                                         @PathVariable(value = "privilegija") String privilegija) {

        Users user = new Users(ime, prezime, email, password, privilegija);

        usersRepository.save(user);

        String toRet = "Uspesno aktiviran nalog korisnika " + user.getFirstName() + " " + user.getLastName()
                + "!<br> Kliknite na link ispod da biste se ulogovali: <br> http://localhost:4200/login";

        return toRet;
    }


}
