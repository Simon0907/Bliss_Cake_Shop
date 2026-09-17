package com.blisscake.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blisscake.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}