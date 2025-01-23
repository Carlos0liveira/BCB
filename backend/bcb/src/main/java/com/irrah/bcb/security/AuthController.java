package com.irrah.bcb.security;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.irrah.bcb.dto.security.AuthRequest;
import com.irrah.bcb.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtService jwtService;
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        if (userService.authenticate(request)) {
            String token = jwtService.generateToken(request.getUsername());
            return ResponseEntity.ok(token);
        }

        return ResponseEntity.status(401).body("Credenciais Inválidas");

    }








}
