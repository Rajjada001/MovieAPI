package com.movies.api.Movies.service;

import com.movies.api.Movies.Movie;
import com.movies.api.Movies.Review;
import com.movies.api.Movies.repository.ReviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {
        Review review = repository.insert(new Review(reviewBody, LocalDateTime.now(), LocalDateTime.now()));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviews").value(review.getId()))
                .first();
        System.out.println("Review created: " + review);
//      Check if the review is added to the movie
        Movie movie = mongoTemplate.findOne(
                new org.springframework.data.mongodb.core.query.Query(Criteria.where("imdbId").is(imdbId)),
                Movie.class);
        System.out.println("Movie with review: " + movie);
        return review;
    }

    public Optional<Review> updateReview(ObjectId reviewId, String reviewBody) {
        Optional<Review> review = repository.findById(reviewId);
        Review updatedReview = review.get();
        updatedReview.setBody(reviewBody);
        updatedReview.setUpdated(LocalDateTime.now());
        repository.save(updatedReview);
        return Optional.of(updatedReview);
    }


public boolean deleteReview(ObjectId reviewId) {
    Optional<Review> review = repository.findById(reviewId);
    if (review.isPresent()) {
        repository.deleteById(reviewId);
        mongoTemplate.updateMulti(
                new org.springframework.data.mongodb.core.query.Query(Criteria.where("reviews").is(reviewId)),
                new Update().pull("reviews", reviewId),
                Movie.class
        );
        return true;
    }
    return false;
}

}
