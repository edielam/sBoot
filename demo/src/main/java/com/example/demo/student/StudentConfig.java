package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args -> {
           Student Ed = new Student(
                    1L,
                    "Eddie",
                    "edielam@gmail.com",
                    LocalDate.of(2000, Month.JANUARY, 3
                    ));
           Student Alex = new Student(
                   "Alex",
                   "alex@gmail.com",
                   LocalDate.of(1995, Month.JANUARY, 3)
           );
           repository.saveAll(List.of(Ed, Alex));
        };
    }
}
