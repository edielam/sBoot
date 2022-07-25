package com.doggraphql.api.repository;

import com.doggraphql.api.entity.Dog;
import org.springframework.data.repository.CrudRepository;

public interface DogRepository extends CrudRepository<Dog, Long> {
}
