package com.example.project.dao;


import com.example.project.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User,Integer> {
    User findUserByUsername(String username);
}
