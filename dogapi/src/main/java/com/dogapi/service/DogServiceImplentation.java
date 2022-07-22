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

    public List<Dog> retrieveDogs() {
        return (List<Dog>) dogRepository.findAll();
    }

    public List<String> retrieveDogBreed() {
        return (List<String>) dogRepository.findAllBreed();
    }

    public String retrieveDogById(Long id) {
        return (String) dogRepository.findBreedById(id);
    }

    public List<String> retrieveDogNames() {
        return null;
    }
}
