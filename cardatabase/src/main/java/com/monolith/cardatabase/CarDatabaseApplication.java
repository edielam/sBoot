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
	private static final Logger log = LoggerFactory.getLogger(CarDatabaseApplication.class);
	@Autowired
	private CarRepository carRepository;
	public static void main(String[] args) {
		SpringApplication.run(CarDatabaseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		carRepository.save(new Car("Ford","Mustang","Red","ADF-1121",
				2022, 59000));
		carRepository.save(new Car("Nissan", "Leaf","White",
				"SSJ-3002",2019,28000));
		carRepository.save(new Car("Toyota", "Prius","silver","KKO-0212",
				2020,39000));
		carRepository.save(new Car("Toyota", "Rav4","blue","KKO-0212",
				2020,39000));

		for (Car car : carRepository.findAll()){
			log.info(car.getBrand() +" "+ car.getModel());
		}
	}
}
