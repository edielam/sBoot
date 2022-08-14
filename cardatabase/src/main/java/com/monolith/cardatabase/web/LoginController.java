package com.monolith.cardatabase.web;

import com.monolith.cardatabase.domain.AccountCredentials;
import com.monolith.cardatabase.services.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    private JwtService jwtService;
    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> getToken(@RequestBody AccountCredentials credentials){
        UsernamePasswordAuthenticationToken accountCred =new UsernamePasswordAuthenticationToken(
                credentials.getUsername(),
                credentials.getPassword());
        Authentication auth = authenticationManager.authenticate(accountCred);

        // Generate token
        String jwts = jwtService.getToken(auth.getName());

        // Build response with the generated token
        
    }
}
