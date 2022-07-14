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

    public List<Dog> retrieveDogs() {
        return null;
    }

    public List<String> retrieveDogBreed() {
        return null;
    }

    public String retrieveDogById(Long id) {
        return null;
    }

    public List<String> retrieveDogNames() {
        return null;
    }
}
