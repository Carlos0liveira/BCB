package com.irrah.bcb.service;

import org.springframework.stereotype.Service;

import com.irrah.bcb.domain.User;
import com.irrah.bcb.utils.CrudService;

@Service
public class UserService extends CrudService<User, Long> {
}
