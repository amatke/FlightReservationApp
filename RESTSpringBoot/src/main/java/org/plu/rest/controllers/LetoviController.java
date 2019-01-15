package org.plu.rest.controllers;


import org.plu.dao.LetoviRepository;
import org.plu.entities.Letovi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/letovi")
@CrossOrigin
public class LetoviController {

    @Autowired
    LetoviRepository letoviRepository;

    //TO DO METODE

    // get all letovi
    @GetMapping("/all")
    public List<Letovi> getAll() {
        return letoviRepository.findAll();
    }

    // Create a new let
    @PostMapping("/add")
    public boolean addUser(@RequestBody Letovi let) {
        //System.out.println(let.getId());
        letoviRepository.save(let);
        return true;
    }

    // brisi let
    @GetMapping("/brisiLet/{id}")
    public boolean brisiLet(@PathVariable(value = "id") int id) {
        letoviRepository.delete(new Long(id));
        return true;
    }

}
