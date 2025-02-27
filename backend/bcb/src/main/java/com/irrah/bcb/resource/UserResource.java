package com.irrah.bcb.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.irrah.bcb.domain.User;
import com.irrah.bcb.utils.CrudResource;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/users")
@Tag(name = "Usuários", description = "Operações relacionadas a usuários")
public class UserResource extends CrudResource<User, Long> {
}
