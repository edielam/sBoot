package com.monolith.cardatabase;

import com.monolith.cardatabase.domain.Car;
import com.monolith.cardatabase.domain.Owner;
import com.monolith.cardatabase.repository.CarRepository;
import com.monolith.cardatabase.repository.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.slf4j.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class CarDatabaseApplication implements CommandLineRunner {
	private static final Logger log = LoggerFactory.getLogger(CarDatabaseApplication.class);
	@Autowired
	private CarRepository carRepository;
	@Autowired
	private OwnerRepository ownerRepository;
	public static void main(String[] args) {
		SpringApplication.run(CarDatabaseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Owner owner1 = new Owner("Eddie", "Lampoh");
		Owner owner2 = new Owner("Richie", "O'brain");
		ownerRepository.saveAll(Arrays.asList(owner1, owner2));

		Car car1 = new Car("Ford","Mustang","Red","ADF-1121",
				2022, 59000, owner1));
		carRepository.save(new Car("Nissan", "Leaf","White",
				"SSJ-3002",2019,28000, o));
		carRepository.save(new Car("Toyota", "Prius","silver","KKO-0212",
				2020,39000));
		carRepository.save(new Car("Toyota", "Rav4","blue","KKO-0212",
				2020,39000));

		for (Car car : carRepository.findAll()){
			log.info(car.getBrand() +" "+ car.getModel());
		}
	}
}
