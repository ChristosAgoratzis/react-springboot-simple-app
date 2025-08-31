package com.example.spring_app.repository;

import com.example.spring_app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<User, Long> {
   User findByUsername(String username);
}