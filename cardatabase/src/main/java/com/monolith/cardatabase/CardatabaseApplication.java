package com.monolith.cardatabase;

import org.springframework.boot.SpringApplication;
import org.slf4j.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CardatabaseApplication {

	public static void main(String[] args) {
		final Logger log = LoggerFactory.getLogger(CardatabaseApplication.class);
		//testing devTools 
		SpringApplication.run(CardatabaseApplication.class, args);
	}

}
