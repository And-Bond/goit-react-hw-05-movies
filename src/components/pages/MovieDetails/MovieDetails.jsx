import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import fetchApi from 'components/Api';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await fetchApi(`movie/${movieId}`);
        setDetails(result);
          console.log(result)

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
        <img src={details?.backdrop_path?.split('').filter((e) => !e.includes('/')).join('')} alt={details?.title} />
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
        <li key={'1'}>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li key={'2'}>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
        <Outlet />
      </div>
    </>
  );

  return (
    <div>
      {MovieDetailsBasicRender}
    </div>
  );
};

export default MovieDetails;
