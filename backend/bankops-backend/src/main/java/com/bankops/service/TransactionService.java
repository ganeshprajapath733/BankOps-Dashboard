package com.bankops.service;

import com.bankops.model.Transaction;
import com.bankops.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class TransactionService {

    private final TransactionRepository repo;

    public TransactionService(TransactionRepository repo) {
        this.repo = repo;
    }

    public List<Transaction> getAll() { return repo.findAll(); }

    public Transaction getById(Long id) { return repo.findById(id).orElseThrow(); }

    public Transaction create(Transaction t) { return repo.save(t); }

    public void delete(Long id) { repo.deleteById(id); }

    public List<Transaction> getByAccount(String acc) { return repo.findByAccountNumber(acc); }

    public List<Transaction> getByStatus(String status) { return repo.findByStatus(status); }

    public Map<String, Double> getSummary() {
        double totalCredit = repo.findByType("CREDIT")
            .stream().mapToDouble(Transaction::getAmount).sum();
        double totalDebit = repo.findByType("DEBIT")
            .stream().mapToDouble(Transaction::getAmount).sum();
        return Map.of("totalCredit", totalCredit, "totalDebit", totalDebit);
    }
}