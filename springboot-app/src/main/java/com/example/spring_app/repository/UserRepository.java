package com.example.spring_app.repository;
import org.springframework.stereotype.Repository;
import com.example.spring_app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<User, Long> {
   
}