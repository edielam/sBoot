package com.monolith.cardatabase.domain;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String password;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String role;

}
