import React from 'react';
import fetchApi from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../Outlet.module.css'

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const result = await fetchApi(`movie/${movieId}/credits`);
        const castResult = result.cast;
        setCast(castResult);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);


  return (
    <ul className={styles.list}>
      {cast?.map((cast) => {
        return (
          <li className={styles.list__item} key={cast.id}>
            <img src={cast.profile_path?.split('').filter((e) => !e.includes('/')).join('')} alt={cast.name} />
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
