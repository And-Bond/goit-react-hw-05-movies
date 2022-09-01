import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import fetchApi from 'components/Api';
import styles from './MovieDetails.module.css'
import propTypes  from "prop-types";

const MovieDetails = ({hesh, querySaveFun}) => {
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
  const onQuerySave = (state) => {
    querySaveFun( state)
  }
  const fullImage  =`https://image.tmdb.org/t/p/w500${details?.backdrop_path}`

  const MovieDetailsBasicRender = (
    <>
      <button>
        {hesh === 'home' &&  <Link onClick={() => onQuerySave(false)} to={`/`}>Go back</Link>}
        {hesh === 'movies' && <Link onClick={() => onQuerySave(true)} to={`/movies`}>Go back</Link>}
      </button>
      <div className={styles.conteiner}>
        <img src={fullImage} alt={details?.title} />
        <div className={styles.second__conteiner}>
        <h2>{details?.title}</h2>
        <p>User Score: {Math.round(details?.vote_average * 10) }</p>
        <h3>Overview</h3>
        <p>{details.overview}</p>
        <h3>Genres</h3>
        {details?.genres?.map(genre => {
          return <p>{genre.name}</p>;
        })}
        </div>
      </div>
      <div className={styles.bottom__section}>
        <p>Additional information</p>
        <ul >
          <li key={'1'}>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li key={'2'}>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        </div>
        <Outlet />
      
    </>
  );

  return <div>{MovieDetailsBasicRender}</div>;
};

MovieDetails.propTypes = {
  hesh: propTypes.string,
  querySaveFun: propTypes.func
}

export default MovieDetails;
