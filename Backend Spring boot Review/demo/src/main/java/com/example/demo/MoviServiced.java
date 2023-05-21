package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoviServiced {
    @Autowired
    private MovieRepo movieRepo;

    public void saveall(Movie movie) {
        movieRepo.save(movie);
    }
}
