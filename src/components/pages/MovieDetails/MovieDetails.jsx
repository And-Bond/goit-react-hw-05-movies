import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import fetchApi from 'components/Api';
import styles from './MovieDetails.module.css';
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
      <button className={styles.button}>
        <Link className={styles.link} to={'/'}>
          Go back
        </Link>
      </button>
      <div className={styles.top__section}>
        <img
          src={details?.backdrop_path
            ?.split('')
            .filter(e => !e.includes('/'))
            .join('')}
          alt={details?.title}
        />
        <div className={styles.top__section_flexContainer}>
          <h2>{details?.title}</h2>
          <p>User Score: {details?.vote_average * 10}</p>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h3 className={styles.genres}>Genres</h3>
          <ul className={styles.genres}>
          {details?.genres?.map(genre => {
            return <li key={genre.name}>{genre.name}</li>;
          })}
          </ul>
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

export default MovieDetails;
