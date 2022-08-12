package com.monolith.cardatabase;

import com.monolith.cardatabase.domain.Car;
import com.monolith.cardatabase.domain.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.slf4j.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CarDatabaseApplication implements CommandLineRunner {
	final Logger log = LoggerFactory.getLogger(CarDatabaseApplication.class);
	@Autowired
	private CarRepository carRepository;
	public static void main(String[] args) {
		SpringApplication.run(CarDatabaseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		carRepository.save(new Car("Ford","Mustang","Red","ADF-1121",
				2022, 59000));
	}
}
