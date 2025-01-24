package com.irrah.bcb.utils;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;

public class CrudResource<T extends BCBEntity<ID>, ID extends Serializable> {

    @Autowired
    private CrudService<T, ID> service;

    @GetMapping
    @Operation(
            summary = "Listar todas as entidades",
            description = "Retorna uma lista paginada de entidades com base nos critérios fornecidos.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Lista retornada com sucesso"),
                    @ApiResponse(responseCode = "400", description = "Parâmetros inválidos")
            }
    )
    public ResponseEntity<Page<T>> findAll(
            @Parameter(description = "Filtro de entidade para busca") T entity,
            Pageable pageable
    ) {
        return ResponseEntity.ok(this.service.findAll(entity, pageable));
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Buscar entidade por ID",
            description = "Retorna uma entidade específica com base no ID fornecido.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Entidade retornada com sucesso"),
                    @ApiResponse(responseCode = "404", description = "Entidade não encontrada")
            }
    )
    public ResponseEntity<T> findById(
            @Parameter(description = "ID da entidade", required = true) @PathVariable ID id
    ) {
        return ResponseEntity.ok(this.service.findById(id));
    }

    @PostMapping
    @Operation(
            summary = "Criar nova entidade",
            description = "Adiciona uma nova entidade ao sistema.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Entidade criada com sucesso"),
                    @ApiResponse(responseCode = "400", description = "Dados inválidos para criação")
            }
    )
    public ResponseEntity<T> save(
            @Parameter(description = "Dados da nova entidade", required = true) @RequestBody T entity
    ) {
        return ResponseEntity.ok(this.service.save(entity));
    }

    @PutMapping("/{id}")
    @Operation(
            summary = "Atualizar entidade por ID",
            description = "Atualiza os dados de uma entidade específica com base no ID fornecido.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Entidade atualizada com sucesso"),
                    @ApiResponse(responseCode = "404", description = "Entidade não encontrada"),
                    @ApiResponse(responseCode = "400", description = "Dados inválidos para atualização")
            }
    )
    public ResponseEntity<T> update(
            @Parameter(description = "ID da entidade", required = true) @PathVariable ID id,
            @Parameter(description = "Dados atualizados da entidade", required = true) @RequestBody T entity
    ) {
        return ResponseEntity.ok(this.service.update(id, entity));
    }

    @DeleteMapping("/{id}")
    @Operation(
            summary = "Excluir entidade por ID",
            description = "Remove uma entidade específica com base no ID fornecido.",
            responses = {
                    @ApiResponse(responseCode = "204", description = "Entidade removida com sucesso"),
                    @ApiResponse(responseCode = "404", description = "Entidade não encontrada")
            }
    )
    public ResponseEntity<Void> deleteById(
            @Parameter(description = "ID da entidade", required = true) @PathVariable ID id
    ) {
        this.service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
