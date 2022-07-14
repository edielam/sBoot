package com.udacity.restfulapi.repository;

import com.udacity.restfulapi.entity.Location;
import org.springframework.data.repository.CrudRepository;

public interface LocationRepository extends CrudRepository<Location, Long> {
}
