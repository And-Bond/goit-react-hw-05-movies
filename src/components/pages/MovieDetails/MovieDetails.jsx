import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetchApi from 'components/Api';
import { Route, Routes } from 'react-router-dom';
import Cast from 'components/organism/Cast/Cast';
import Reviews from 'components/organism/Reviews/Reviews';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await fetchApi(`movie/${movieId}`);
        setDetails(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);
  const MovieDetailsBasicRender = (
    <>
      <button>
        <Link to={'/'}>Go back</Link>
      </button>
      <div>
        <img src="" alt="" />
        <h2>{details?.title}</h2>
        <p>User Score: {details?.vote_average * 10}</p>
        <h3>Overview</h3>
        <p>{details.overview}</p>
        <h3>Genres</h3>
        {details?.genres?.map(genre => {
          return <p>{genre.name}</p>;
        })}
      </div>
      <div>
        <ul>Additional information</ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </div>
    </>
  );

  return (
    <div>
      {MovieDetailsBasicRender}
      <Routes>
        <Route path={`/movies/${movieId}/cast`} element={<Cast />} />
        <Route path={`/movies/${movieId}/reviews`} element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
