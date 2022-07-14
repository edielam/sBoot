package com.dogapi.service;

import com.dogapi.entity.Dog;

import java.util.List;

public interface DogService {
    List<Dog> retrieveDogBreed();
    List<Dog> retrieveDogById();
    List<Dog> retrieveDogNames();

}
