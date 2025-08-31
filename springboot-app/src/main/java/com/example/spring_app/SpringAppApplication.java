package com.example.spring_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.spring_app.model.User;
import com.example.spring_app.repository.UserRepository;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class SpringAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringAppApplication.class, args);

	}
}
