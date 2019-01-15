package org.plu.rest.controllers;

import org.plu.dao.StudentRepository;
import org.plu.entities.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stud")
@CrossOrigin
public class StudentController {

    @Autowired
    StudentRepository studentRepository;

    @PostMapping("/new")
    public boolean addnewStudent(@RequestBody Student student){
        studentRepository.save(student);
        return true;
    }


}
