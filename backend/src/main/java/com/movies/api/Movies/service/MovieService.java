package com.movies.api.Movies.service;

import com.movies.api.Movies.Movie;
import com.movies.api.Movies.repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    private static final Logger logger = Logger.getLogger(MovieService.class.getName());

    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(String id) {
        logger.info("Querying movie with ObjectId: " + id);
        Optional<Movie> movie = movieRepository.findMovieByImdbId(id);
        logger.info("Movie found: " + movie.isPresent());
        return movie;
    }


}
