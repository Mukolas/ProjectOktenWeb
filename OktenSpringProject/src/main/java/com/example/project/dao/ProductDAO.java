package com.example.project.dao;

import com.example.project.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductDAO extends JpaRepository<Product , Integer> {
}
