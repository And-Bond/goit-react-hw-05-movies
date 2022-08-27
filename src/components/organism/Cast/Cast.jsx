import React from 'react';
import fetchApi from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    <ul>
      {cast?.map((cast) => {
        return (
          <li key={cast.id}>
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
