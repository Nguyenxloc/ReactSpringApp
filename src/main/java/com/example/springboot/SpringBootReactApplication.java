package com.example.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class SpringBootReactApplication {
    public static void main(String[] args) {
        System.out.println("run spring boot");
        SpringApplication.run(SpringBootReactApplication.class, args);
    }
}