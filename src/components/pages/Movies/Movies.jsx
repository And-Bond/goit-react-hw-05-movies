import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchApi from 'components/Api';
import Loader from "components/molecules/Loader/Loader";
import styles from './Movies.module.css'


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
          <li  key={element.id}>
            <Link className={styles.link} to={`/movies/${element.id}`}>
            {element.title}
            </Link>
          </li>
        );
      });
    return (
    <div>
        
        <form className={styles.form} action="submit" onSubmit={onSubmit}>
        <input className={styles.input} type="text" value={inputValue} onChange={setInputValueFun}/>
        <button className={styles.button} type="submit">Search</button>
        </form>
        {submittedState.loading && <Loader />}
        {submittedState.submitted && <ul>{render}</ul>}
        
    </div>)
}

export default Movies