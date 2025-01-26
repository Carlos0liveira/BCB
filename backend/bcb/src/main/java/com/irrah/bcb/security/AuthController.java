package com.irrah.bcb.security;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.irrah.bcb.dto.security.AuthRequest;
import com.irrah.bcb.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Tag(name = "Autenticação", description = "Operações relacionadas a autenticação")
public class AuthController {

    private final JwtService jwtService;
    private final UserService userService;

    @PostMapping("/login")
    @Operation(
            summary = "Autenticar usuário",
            description = "Realiza a autenticação do usuário com base nas credenciais fornecidas.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Usuário autenticado com sucesso"),
                    @ApiResponse(responseCode = "401", description = "Credenciais inválidas")
            }
    )
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        if (userService.authenticate(request)) {
            String token = jwtService.generateToken(request.getEmail());

            return ResponseEntity.ok(token);
        }

        return ResponseEntity.status(401).body("Credenciais Inválidas");

    }








}
