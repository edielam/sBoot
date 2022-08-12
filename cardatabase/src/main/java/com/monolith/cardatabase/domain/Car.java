package com.monolith.cardatabase.domain;

import javax.persistence.*;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String brand, model, color, registerNumber;
    private int year;
    private double price;
    @Column(name = "Explanation", nullable = false, length = 256)
    private String description;


}
