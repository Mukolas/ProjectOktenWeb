package com.example.project.dao;

import com.example.project.models.AuthToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthTokenDAO extends JpaRepository<AuthToken,Integer> {
    AuthToken findByToken(String token);
}
