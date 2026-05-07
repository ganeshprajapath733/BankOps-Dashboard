package com.bankops.controller;

import com.bankops.model.Transaction;
import com.bankops.service.TransactionService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Transaction> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public Transaction getById(@PathVariable Long id) { return service.getById(id); }

    @GetMapping("/account/{accountNumber}")
    public List<Transaction> getByAccount(@PathVariable String accountNumber) {
        return service.getByAccount(accountNumber);
    }

    @GetMapping("/status/{status}")
    public List<Transaction> getByStatus(@PathVariable String status) {
        return service.getByStatus(status);
    }

    @GetMapping("/summary")
    public Map<String, Double> getSummary() { return service.getSummary(); }

    @PostMapping
    public Transaction create(@Valid @RequestBody Transaction t) { return service.create(t); }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}