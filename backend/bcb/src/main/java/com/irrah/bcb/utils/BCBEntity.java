package com.irrah.bcb.utils;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

public interface BCBEntity <T extends Serializable> {
    T getId();

    @JsonIgnore
    default  boolean isNew(){
        return this.getId() == null;
    }
}
