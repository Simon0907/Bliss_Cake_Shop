package com.blisscake.backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.blisscake.backend.entity.User;
import com.blisscake.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public Map<String,Object> register(@RequestBody User user){

        Map<String,Object> response = new HashMap<>();

        Optional<User> existingUser =
                userRepository.findByEmail(user.getEmail());

        if(existingUser.isPresent()){

            response.put("success", false);
            response.put("message", "Email already exists");

            return response;
        }

        userRepository.save(user);

        response.put("success", true);
        response.put("message", "Account created successfully");

        return response;
    }

    @PostMapping("/login")
    public Map<String,Object> login(@RequestBody User loginUser){

        Map<String,Object> response = new HashMap<>();

        Optional<User> user =
                userRepository.findByEmail(loginUser.getEmail());

        if(user.isPresent()
                && user.get().getPassword().equals(loginUser.getPassword())){

            response.put("success", true);
            response.put("username", user.get().getUsername());

        }else{

            response.put("success", false);
            response.put("message", "Invalid credentials");

        }

        return response;
    }
}