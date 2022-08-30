import React from "react";
import { useState, useEffect, useRef } from 'react';
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
    const [error, setError] = useState({
      hasError: false,
      errorMsg: ''
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
    const firstRender = useRef('true')
    useEffect(() => {
        const fetchFun = async () => {
            try {
              if(firstRender.current){
                firstRender.current = false
                return
              }
              const query = submittedState.query
              const result = await fetchApi('search/movie', query);
              const resultArray = result.results
              if(resultArray.length === 0 && !firstRender.current){
                setSubmittedValue((prevState) => {
                  return {...prevState, loading: false}
                })
                setError({hasError: true, errorMsg: 'No matches found'})
                return
              }
              setMovies(resultArray);
              setError({hasError: false, errorMsg: ''})
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
        {error.hasError && <h4>{error.errorMsg}</h4>}
        
    </div>)
}

export default Movies