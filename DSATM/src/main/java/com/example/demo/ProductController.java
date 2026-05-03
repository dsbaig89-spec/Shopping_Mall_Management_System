package com.example.demo;

import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cosmetics")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository repo;

    // ✅ GET ALL
    @GetMapping
    public List<Product> getAll() {
        return repo.findAll();
    }

    // ✅ ADD PRODUCT
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return repo.save(product);
    }

    // ✅ UPDATE STOCK
    @PutMapping("/{id}")
    public ResponseEntity<?> updateStock(@PathVariable Long id,
                                         @RequestBody Map<String, Object> updates) {

        Product product = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (updates.containsKey("stock")) {
            product.setStock(((Number) updates.get("stock")).intValue());
        }

        repo.save(product);

        return ResponseEntity.ok(product);
    }

    // ✅ DELETE PRODUCT
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        repo.deleteById(id);
    }
}