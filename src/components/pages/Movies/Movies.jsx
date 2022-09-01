import React from "react";
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import fetchApi from 'components/Api';
import Loader from "components/molecules/Loader/Loader";
import styles from './Movies.module.css'
import propTypes  from "prop-types";

const Movies = ({onClick, queryProp, queryChange}) => {
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
        queryChange()
        localStorage.setItem('query', inputValue)
        setSubmittedValue(() => {
            return {
                loading: true, submitted: true, query: inputValue
            }
        })
    }
    const firstRender = useRef('true')
    useEffect(() => {
      onClick()
      if(queryProp){
        const fetchFun = async () => {
          try {
            const query = localStorage.getItem('query')
            const result = await fetchApi('search/movie', query);
            const resultArray = result.results
            setMovies(resultArray);
            setSubmittedValue((prevState) => {
              return {...prevState, submitted: true}
            })
            if(submittedState.loading){
              setSubmittedValue((prevState) => {
                  return {...prevState, loading: false} 
                })
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchFun();
        return
      }
        const fetchFun = async () => {
            try {
            const query = submittedState.query
            localStorage.setItem('query', query)
              if(firstRender.current){
                firstRender.current = false
                return
              }
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
    },[submittedState, onClick, queryProp])
    
    // const onLinkClick = (e) => {
    //   heshFun(movies)
    // }
    const render = movies?.map(element => {
        return (
          <li  key={element.id}>
            <Link className={styles.link}  to={`/movies/${element.id}`}>
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

Movies.propTypes = {
  onClick: propTypes.func,
  queryProp: propTypes.bool,
  queryChange: propTypes.func
}

export default Movies