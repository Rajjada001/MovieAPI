import { useEffect, useRef, useState } from 'react'
import api from '../../api/axiosConfig'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ReviewForm from '../reviewForm/ReviewForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef()
  const [editReviewId, setEditReviewId] = useState(null)
  const [editReviewText, setEditReviewText] = useState('')
  let params = useParams()
  const movieId = params.movieId

  useEffect(() => {
    getMovieData(movieId)
  }, [])

  const addReview = async (e) => {
    e.preventDefault()

    const rev = revText.current

    try {
      const response = await api.post('/api/v1/reviews', {
        reviewBody: rev.value,
        imdbId: movieId,
      })

      const updatedReviews = [
        ...reviews,
        { body: rev.value, _id: response.data._id },
      ]

      rev.value = ''

      setReviews(updatedReviews)
    } catch (err) {
      console.error(err)
    }
  }

  const deleteReview = async (reviewId) => {
    try {
      await api.delete(`/api/v1/reviews/${reviewId}`)
      const updatedReviews = reviews.filter((review) => review._id !== reviewId)
      setReviews(updatedReviews)
    } catch (err) {
      console.error(err)
    }
  }

  const updateReview = async (e) => {
    e.preventDefault()

    try {
      await api.put(`/api/v1/reviews/${editReviewId}`, {
        reviewBody: editReviewText,
      })

      const updatedReviews = reviews.map((review) =>
        review._id === editReviewId
          ? { ...review, body: editReviewText }
          : review
      )

      setReviews(updatedReviews)
      setEditReviewId(null)
      setEditReviewText('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <img src={movie?.poster} alt='' />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText='Write a Review?'
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <div key={r._id}>
                <Row>
                  <Col>{r.body}</Col>
                  <Col xs='auto'>
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      onClick={() => {
                        setEditReviewId(r._id)
                        setEditReviewText(r.body)
                      }}
                      style={{ cursor: 'pointer', marginRight: '10px' }}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteReview(r._id)}
                      style={{ cursor: 'pointer' }}
                    />
                  </Col>
                </Row>
                {editReviewId === r._id && (
                  <Row>
                    <Col>
                      <ReviewForm
                        handleSubmit={updateReview}
                        revText={{ current: { value: editReviewText } }}
                        labelText='Update Review'
                        defaultValue={editReviewText}
                      />
                    </Col>
                  </Row>
                )}
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            )
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default Reviews
