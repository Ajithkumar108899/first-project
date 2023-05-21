package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MovieController {
    @Autowired
    MoviServiced moviServiced;

    @PostMapping("/create")
    public void create(@RequestBody Movie movie){
        moviServiced.saveall(movie);
    }
}
