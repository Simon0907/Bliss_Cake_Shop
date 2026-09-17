package com.blisscake.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.blisscake.backend.entity.Product;
import com.blisscake.backend.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public Product addProduct(@RequestBody Product product){

        return productRepository.save(product);
    }

    @GetMapping
    public List<Product> getProducts(){

        return productRepository.findAll();
    }
}