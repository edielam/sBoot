package com.doggraphql.api.service;

import com.doggraphql.api.entity.Dog;

import java.util.List;

public interface DogService {
    List<Dog> retrieveDogs();
    List<String> retrieveDogBreed();
    String retrieveDogById(Long id);
    List<String> retrieveDogNames();

}
