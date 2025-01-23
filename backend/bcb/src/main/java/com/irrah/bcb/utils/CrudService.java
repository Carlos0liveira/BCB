package com.irrah.bcb.utils;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import com.irrah.bcb.utils.exceptions.ValidationException;

@Transactional(noRollbackFor = { ValidationException.class })
public class CrudService <T extends BCBEntity<ID>, ID extends Serializable> {

    @Autowired
    private CrudRepository<T, ID> repository;


    public T findById(ID id){
        return this.repository.findById(id)
                .orElseThrow(() -> new ValidationException("Não encontrado dados para o ID " + id));
    }

    public Page<T> findAll(T entity, Pageable pageable){
        return this.repository.findAll(Example.of(entity), pageable);
    }

    public T update(ID id, T entity){
        boolean exists = this.repository.existsById(id);
        if(!exists){
            throw new ValidationException("Não encontrado dados para o ID " + id);
        }

        if(!id.equals(entity.getId())){
            throw new ValidationException("ID informado é diferente do ID do objeto");
        }

        entity = this.doSave(entity);
        return entity;
    }

    public T save(T entity){

        if(!entity.isNew()){
            return this.update(entity.getId(), entity);
        }

        entity = this.doSave(entity);
        return entity;
    }

    public void deleteById(ID id){
        T entity = this.findById(id);
        this.doDelete(entity);
    }

    private T doSave(T entity){
        return this.repository.save(entity);
    }

    private void doDelete(T entity){
        this.repository.deleteById(entity.getId());
    }


}
