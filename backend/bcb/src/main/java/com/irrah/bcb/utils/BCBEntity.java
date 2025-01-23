package com.irrah.bcb.utils;

import java.io.Serializable;

public interface BCBEntity <K extends Serializable> {
    K getId();
}
