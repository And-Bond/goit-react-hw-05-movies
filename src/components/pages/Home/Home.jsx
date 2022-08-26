import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import fetchApi from 'components/Api';
const Home = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const fetchFun = async () => {
      try {
        const result = await fetchApi('trending/movie/day');
        setElements(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFun();
  }, []);
  const render = elements?.map(element => {
    return (
      <li key={element.id}>
        <Link to={`/movies/${element.id}`}>
        {element.title}
        </Link>
      </li>
    );
  });
  return (
    <div>
      <h2>Trending today</h2>
      <ul>{render}</ul>
    </div>
  );
};

export default Home;
