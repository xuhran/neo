package com.example.neo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @RequestMapping("/")
    public String home() {
        return  "Hello boy~";
    }

    @RequestMapping("/hello")
    public String index() {
        return  "Hello World!!!5555";
    }

    @RequestMapping("/test")
    public String index2() {
        return  "<H1>Test 12312</H1>";
    }
}
