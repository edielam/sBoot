package com.monolith.cardatabase.services;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;

@Component
public class JwtService {
    static final long EXPIRATIONTIME = 86400000;
    static final String PREFIX = "Bearer";
    
    // Generate secret key. Only for the demonstration
    // You should read it from the application configuration
    static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Generate signed JWT token

}
