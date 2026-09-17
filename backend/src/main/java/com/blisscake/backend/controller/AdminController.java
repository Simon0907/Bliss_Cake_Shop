package com.blisscake.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.blisscake.backend.repository.OrderRepository;
import com.blisscake.backend.repository.ProductRepository;
import com.blisscake.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    // DASHBOARD STATS

    @GetMapping("/dashboard")
    public Map<String,Object> dashboard(){

        Map<String,Object> data =
                new HashMap<>();

        data.put(
            "totalOrders",
            orderRepository.count()
        );

        data.put(
            "totalUsers",
            userRepository.count()
        );

        data.put(
            "totalProducts",
            productRepository.count()
        );

        return data;
    }

    // ALL USERS

    @GetMapping("/users")
    public Object getUsers(){

        return userRepository.findAll();

    }

    // ALL ORDERS

    @GetMapping("/orders")
    public Object getOrders(){

        return orderRepository.findAll();

    }

    // ALL PRODUCTS

    @GetMapping("/products")
    public Object getProducts(){

        return productRepository.findAll();

    }

}