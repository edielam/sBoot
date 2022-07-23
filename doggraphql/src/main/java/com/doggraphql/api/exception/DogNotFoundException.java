package com.doggraphql.api.exception;

import Graphql;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Your dog is not here")
public class DogNotFoundException extends RuntimeException {
    public DogNotFoundException() {
    }

    public DogNotFoundException(String message) {
        super(message);
    }
}