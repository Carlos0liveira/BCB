package com.irrah.bcb.utils;

import java.io.Serializable;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.query.QueryByExampleExecutor;

@NoRepositoryBean
public interface CrudRepository <T  extends BCBEntity<ID>, ID extends Serializable> extends org.springframework.data.repository.CrudRepository<T, ID>, QueryByExampleExecutor<T> {
}
