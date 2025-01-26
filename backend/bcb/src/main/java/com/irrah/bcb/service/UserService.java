package com.irrah.bcb.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.irrah.bcb.domain.User;
import com.irrah.bcb.dto.security.AuthRequest;
import com.irrah.bcb.repository.UserRepository;
import com.irrah.bcb.utils.CrudService;
import com.irrah.bcb.utils.exceptions.ValidationException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService extends CrudService<User, Long> {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public boolean authenticate(AuthRequest request) {
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow( () -> new ValidationException("Usuário não encontrado"));

        return passwordEncoder.matches(request.getPassword(), user.getPassword());
    }

    @Override
    public User save (User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return super.save(user);
    }

}
