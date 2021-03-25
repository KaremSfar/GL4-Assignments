package karem.springframework.mypetclinic.model;

import java.io.Serializable;

public class BaseEntity implements Serializable {

    //hibernate Recommends using boxed Types
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
