package com.monolith.cardatabase.repository;

import com.monolith.cardatabase.domain.Owner;
import org.springframework.data.repository.CrudRepository;

public interface OwnerRepository extends CrudRepository<Owner, Long> {
}
