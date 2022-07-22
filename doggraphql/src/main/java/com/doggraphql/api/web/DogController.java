package com.doggraphql.api.web;

import com.doggraphql.api.entity.Dog;
import com.doggraphql.api.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DogController {
    private DogService dogService;

    @Autowired
    public void setDogService(DogService dogService) {
        this.dogService = dogService;
    }
    @GetMapping("/dogs")
    public ResponseEntity<List<Dog>> getAllDogs(){
        List<Dog> dogList = dogService.retrieveDogs();
        return new ResponseEntity<List<Dog>>(dogList, HttpStatus.OK);
    }

    @GetMapping("/dogs/breed")
    public ResponseEntity<List<String>> getDogBreeds(){
        List<String> dogBreed = dogService.retrieveDogBreed();
        return new ResponseEntity<List<String>>(dogBreed, HttpStatus.OK);
    }

    @GetMapping("/{id}/dogById")
    public ResponseEntity<String> getDogById(@PathVariable Long id){
        String dogById = dogService.retrieveDogById(id);
        return new ResponseEntity<String>(dogById, HttpStatus.OK);
    }

    @GetMapping("/dogs/names")
    public ResponseEntity<List<String>> getDogNames(){
        List<String> names = dogService.retrieveDogNames();
        return new ResponseEntity<List<String>>(names,HttpStatus.OK);
    }
}
