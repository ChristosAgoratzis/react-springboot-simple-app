package com.example.spring_app.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false, length = 255)
    private String passwordHash;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items;

    // getters & setters
    public String getUsername() {
        return username;    
    }
    public void setUsername(String username) {
        this.username = username;    
    }      
    public String getEmail() {                  
        return email;    
    }
    public void setEmail(String email) {
        this.email = email;    
    }    
    public String getPasswordHash() {                   
        return passwordHash;    
    }       
    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;    
    }                                 
}
