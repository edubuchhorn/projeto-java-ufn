package com.estoque.projeto.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estoque.projeto.model.entities.Estoque;

public interface EstoqueRepository extends JpaRepository<Estoque, Integer>
 {
    
}
