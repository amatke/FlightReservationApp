package org.plu.entities;

import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private boolean operator;

    private boolean admin;

    private boolean korisnik;

    private boolean changed;

    public Users(){}

    public Users(String firstName, String lastName, String email, String password, String privilegija) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        if(privilegija.equalsIgnoreCase("admin")) {
            this.admin = true;
            this.operator = false;
            this.korisnik = false;
        } else if (privilegija.equalsIgnoreCase("korisnik")){
            this.admin = false;
            this.operator = false;
            this.korisnik = true;
        } else {
            this.admin = false;
            this.operator = true;
            this.korisnik = false;
        }
        this.changed = false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isOperator() {
        return operator;
    }

    public void setOperator(boolean operator) {
        this.operator = operator;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public boolean isChanged() {
        return changed;
    }

    public void setChanged(boolean changed) {
        this.changed = changed;
    }

    public boolean isKorisnik() {
        return korisnik;
    }

    public void setKorisnik(boolean korisnik) {
        this.korisnik = korisnik;
    }
}
