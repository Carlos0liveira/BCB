package com.irrah.bcb.repository;

import org.springframework.stereotype.Repository;

import com.irrah.bcb.domain.Pessoa;
import com.irrah.bcb.utils.CrudRepository;

@Repository
public interface PessoaRepository extends CrudRepository<Pessoa, Long> {
}
