package com.blisscake.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.blisscake.backend.entity.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long>{

    List<Order> findByUsername(String username);

}