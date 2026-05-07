package com.bankops;

import com.bankops.model.Transaction;
import com.bankops.repository.TransactionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final TransactionRepository repo;

    public DataSeeder(TransactionRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) {
        if (repo.count() > 1) return; // Don't seed if data already exists

        repo.saveAll(List.of(
            tx("ACC001", "CREDIT", 5000.0,  "Salary credit",       "SUCCESS"),
            tx("ACC001", "DEBIT",  1200.0,  "Rent payment",        "SUCCESS"),
            tx("ACC002", "CREDIT", 3000.0,  "Freelance payment",   "SUCCESS"),
            tx("ACC002", "DEBIT",   450.0,  "Electricity bill",    "SUCCESS"),
            tx("ACC003", "DEBIT",  2000.0,  "Loan EMI",            "FAILED"),
            tx("ACC003", "CREDIT", 8000.0,  "Business income",     "SUCCESS"),
            tx("ACC001", "DEBIT",   300.0,  "Grocery shopping",    "SUCCESS"),
            tx("ACC002", "DEBIT",   150.0,  "Internet bill",       "PENDING"),
            tx("ACC003", "CREDIT", 1500.0,  "Refund received",     "SUCCESS"),
            tx("ACC001", "DEBIT",   500.0,  "Insurance premium",   "PENDING")
        ));

        System.out.println("✅ Seed data inserted.");
    }

    private Transaction tx(String acc, String type, Double amount, String desc, String status) {
        Transaction t = new Transaction();
        t.setAccountNumber(acc);
        t.setType(type);
        t.setAmount(amount);
        t.setDescription(desc);
        t.setStatus(status);
        return t;
    }
}