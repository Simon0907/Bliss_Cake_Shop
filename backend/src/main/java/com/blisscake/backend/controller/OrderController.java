package com.blisscake.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.blisscake.backend.entity.Order;
import com.blisscake.backend.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // PLACE ORDER

    @PostMapping
    public Order placeOrder(@RequestBody Order order){

        return orderRepository.save(order);

    }

    // GET ALL ORDERS

    @GetMapping
    public List<Order> getOrders(){

        return orderRepository.findAll();

    }

    // GET USER ORDERS

    @GetMapping("/user/{username}")
    public List<Order> getUserOrders(
            @PathVariable String username){

        return orderRepository.findByUsername(username);

    }

}