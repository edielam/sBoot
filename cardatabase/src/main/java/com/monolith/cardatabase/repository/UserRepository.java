package com.monolith.cardatabase.repository;

import com.monolith.cardatabase.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository <User,Long> {
}
