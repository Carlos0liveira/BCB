package com.irrah.bcb.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.irrah.bcb.domain.User;
import com.irrah.bcb.utils.CrudRepository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
