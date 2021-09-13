package com.example.project.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
        private String picture;
    private String whereis;
    private int valuesOfRoom;
    private int square;
    private String pet;
    private String forniture;
    private String moreInformation;
    private String morePicture;
    private int cost;

    public Product() {
    }


}

