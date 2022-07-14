package com.udacity.restfulapi.service;

import com.udacity.restfulapi.entity.Location;
import com.udacity.restfulapi.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImplentation implements LocationService{
    @Autowired
    LocationRepository locationRepository;

    public List<Location> retrieveLocations(){
        return (List<Location>) locationRepository.findAll();
    }
}
