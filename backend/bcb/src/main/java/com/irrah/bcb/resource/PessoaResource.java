package com.irrah.bcb.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.irrah.bcb.domain.User;
import com.irrah.bcb.utils.CrudResource;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/pessoas")
@Tag(name = "Pessoas", description = "Operações relacionadas a pessoas")
public class PessoaResource extends CrudResource<User, Long> {
}
