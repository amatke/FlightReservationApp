package org.plu.rest.controllers;


import org.plu.dao.AvioniRepository;
import org.plu.entities.Avioni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/avioni")
@CrossOrigin
public class AvioniController {

    @Autowired
    AvioniRepository avioniRepository;

    //TO DO METODE

    // get all users
    @GetMapping("/all")
    public List<Avioni> addUser() {
        return avioniRepository.findAll();
    }

    // DODAVANJE NOVOG AVIONA
    @PostMapping("/add")
    public boolean addUser(@RequestBody Avioni avion) {
        avioniRepository.save(avion);
        return true;
    }


    // brisi avion
    @GetMapping("/brisiAvion/{id}")
    public boolean brisiAvion(@PathVariable(value = "id") int id) {
        avioniRepository.delete(new Long(id));
        return true;
    }
}
