package com.allstate.compozed.teacherspet.student;

import javax.persistence.Id;

final class StudentModel {

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String name;
}
