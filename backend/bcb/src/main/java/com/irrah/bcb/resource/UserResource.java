package com.irrah.bcb.resource;

import org.springframework.web.bind.annotation.RestController;

import com.irrah.bcb.domain.User;
import com.irrah.bcb.utils.CrudResource;

@RestController("/users")
public class UserResource extends CrudResource<User, Long> {
}
