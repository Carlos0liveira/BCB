package com.irrah.bcb.domain;

import com.irrah.bcb.utils.BCBEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "pessoa")
public class Pessoa implements BCBEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String email;

    private String telefone;

    private String cpfResponsael;

    private String cnpjEmpresa;

    private String nomeEmpresa;

}
