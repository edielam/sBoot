package com.monolith.cardatabase.repository;

import com.monolith.cardatabase.domain.Owner;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "omegas")
public interface OwnerRepository extends CrudRepository<Owner, Long> {
    List<Owner> findByFirstName(@Param("firstName") String firstname);
}
