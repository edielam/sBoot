package com.udacity.restfulapi.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String breed;
    private String origin;

    public Dog() {
    }

    public Dog(Long id, String name, String breed, String origin) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.origin = origin;
    }
    
}
