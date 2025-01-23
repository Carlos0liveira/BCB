package com.irrah.bcb.utils;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

public class CrudResource <T extends BCBEntity<ID>, ID extends Serializable> {

    @Autowired
    private CrudService<T, ID> service;

    @GetMapping
    public ResponseEntity<Page<T>> findAll(T entity, Pageable pageable){
        return ResponseEntity.ok(this.service.findAll(entity, pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<T> findById(ID id){
        return ResponseEntity.ok(this.service.findById(id));
    }

    @PostMapping
    public ResponseEntity<T> save(T entity){
        return ResponseEntity.ok(this.service.save(entity));
    }

    @PutMapping("/{id}")
    public ResponseEntity<T> update(ID id, T entity){
        return ResponseEntity.ok(this.service.update(id, entity));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(ID id){
        this.service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
