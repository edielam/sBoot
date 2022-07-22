package com.dogapi.service;

import com.dogapi.entity.Dog;
import com.dogapi.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        Optional<String> optionalBreed = Optional.ofNullable(dogRepository.findBreedById(id));
        String breed = optionalBreed.orElseThrow(DogNotFoundException::new);
        return breed;
    }

    public List<String> retrieveDogNames() {
        return (List<String>) dogRepository.findAllName();
    }
}
