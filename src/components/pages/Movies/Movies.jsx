import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchApi from 'components/Api';
import Loader from "components/molecules/Loader/Loader";

const Movies = () => {
    const [movies,setMovies] = useState([])
    const [inputValue,setInputValue] = useState('')
    const [submittedState,setSubmittedValue] = useState({
        loading: false,
        submitted: false,
        query: ''
    })
    const setInputValueFun = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setSubmittedValue(() => {
            return {
                loading: true, submitted: true, query: inputValue
            }
        })
    }
    useEffect(() => {
        const fetchFun = async () => {
            try {
            const query = submittedState.query
              const result = await fetchApi('search/movie', query);
              const resultArray = result.results
              setMovies(resultArray);
              if(submittedState.loading){
                setSubmittedValue((prevState) => {
                    return {...prevState, loading: false} 
                  })
              }
              console.log(resultArray)
            } catch (error) {
              console.log(error);
            }
          };
          fetchFun();
    },[submittedState])
    const render = movies?.map(element => {
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
        
        <form action="submit" onSubmit={onSubmit}>
        <input type="text" value={inputValue} onChange={setInputValueFun}/>
        <button type="submit">Search</button>
        </form>
        {submittedState.loading && <Loader />}
        {submittedState.submitted && <ul>{render}</ul>}
        
    </div>)
}

export default Movies