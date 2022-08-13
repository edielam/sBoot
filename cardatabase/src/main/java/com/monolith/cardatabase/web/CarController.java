package com.monolith.cardatabase.web;

import com.monolith.cardatabase.domain.Car;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {
    @RequestMapping("/cars")
    public Iterable<Car> getCars(){

    }
}
