package com.estoque.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.estoque.projeto.model.entities.Estoque;
import com.estoque.projeto.model.repositories.EstoqueRepository;


@RestController
@RequestMapping("/estoque")
public class EstoqueController {
    @Autowired
    private EstoqueRepository estoqueRepository;

    @PostMapping
    public @ResponseBody Estoque novoEstoque(@RequestBody Estoque estoque){
        estoqueRepository.save(estoque);
        return estoque;
    }

    @GetMapping
    public List<Estoque> obterEstoque(){
        return estoqueRepository.findAll();
    }

    @PutMapping
    public Estoque alterarEstoque(@RequestBody Estoque estoque){
        return estoqueRepository.save(estoque);
    }

    @DeleteMapping(path="/{id}")
    public void ExcluirEstoque(@PathVariable int id){
        estoqueRepository.deleteById(id);
    }


}
