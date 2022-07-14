package com.dogapi.service;

import com.dogapi.entity.Dog;
import com.dogapi.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogServiceImplentation implements DogService {
    @Autowired
    DogRepository dogRepository;

    public DogServiceImplentation(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    @Override
    public List<Dog> retrieveDogBreed() {
        return null;
    }

    @Override
    public List<Dog> retrieveDogById() {
        return null;
    }

    @Override
    public List<Dog> retrieveDogNames() {
        return null;
    }
}
