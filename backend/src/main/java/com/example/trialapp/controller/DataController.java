package com.example.trialapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class DataController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from tiger-99 Backend!");
        response.put("status", "success");
        return response;
    }

    @GetMapping("/data")
    public Map<String, Object> getData() {
        Map<String, Object> response = new HashMap<>();
        response.put("id", 1);
        response.put("title", "Sample Data from Backend");
        response.put("description", "This data is served by Spring Boot API");
        response.put("timestamp", System.currentTimeMillis());
        return response;
    }

    @GetMapping("/items")
    public Map<String, Object> getItems() {
        Map<String, Object> response = new HashMap<>();
        response.put("items", Arrays.asList(
                createItem(1, "Item 1", "Description for item 1"),
                createItem(2, "Item 2", "Description for item 2"),
                createItem(3, "Item 3", "Description for item 3")
        ));
        response.put("total", 3);
        return response;
    }

    @PostMapping("/echo")
    public Map<String, Object> echo(@RequestBody Map<String, String> request) {
        Map<String, Object> response = new HashMap<>();
        response.put("received", request);
        response.put("message", "Data received successfully");
        response.put("timestamp", System.currentTimeMillis());
        return response;
    }

    private Map<String, Object> createItem(int id, String name, String description) {
        Map<String, Object> item = new HashMap<>();
        item.put("id", id);
        item.put("name", name);
        item.put("description", description);
        return item;
    }
}
