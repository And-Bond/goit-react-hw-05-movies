import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from 'components/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const result = await fetchApi(`movie/${movieId}/reviews`);
        const resultArray = result.results;
        setReviews(resultArray);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);
  const render =
    reviews.length === 0 ? (
      <p>There is no reviews yet</p>
    ) : (
      <div>
        {reviews.map((review) => {
          return (
            <>
              <h3>{`Author ${review.author}`}</h3>
              <p>{review.content}</p>
            </>
          );
        })}
      </div>
    );
  console.log(reviews);
  return <div>{render}</div>;
};

export default Reviews;
