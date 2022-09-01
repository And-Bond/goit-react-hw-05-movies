import React from 'react';
import fetchApi from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/molecules/Loader/Loader';
import { useRef } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading,setLoading] = useState(false)

  // const firstRender = useRef(true)
  useEffect(() => {
    // if(firstRender.current){
    //   firstRender.current = false
    //   console.log('works')
    //   return
    // }
    console.log('works')
    setLoading(true)
    const fetchCast = async () => {
      try {
        const result = await fetchApi(`movie/${movieId}/credits`);
        const castResult = result.cast;
        setCast(castResult);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);
  console.log('render') 
  
  return (
    <ul>
      {loading && <Loader></Loader>}
      {cast?.map((cast) => {
        const altImage = cast?.profile_path !== null ? cast.name : 'No image found'
        return (
          <li key={cast.id}>
            <img src={`https://image.tmdb.org/t/p/w200${cast?.profile_path}`} alt={altImage} />
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
