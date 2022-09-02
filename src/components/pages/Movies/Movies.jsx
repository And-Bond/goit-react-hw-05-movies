import React from "react";
import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import fetchApi from 'components/Api';
import Loader from "components/molecules/Loader/Loader";
import styles from './Movies.module.css'
import propTypes  from "prop-types";

const Movies = ({onLinkClick}) => {
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
    const [searchParams, setSearchParams] = useSearchParams()
    const setInputValueFun = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue === ''){
          return 
        }
        setSearchParams({query: inputValue})
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
              if(firstRender.current && searchParams.get('query') === ''){
                firstRender.current = false
                return
              }
              const query = searchParams.get('query') ?? submittedState.query
              const result = await fetchApi('search/movie', query);
              const resultArray = result.results
              if(resultArray.length === 0){
                setSubmittedValue((prevState) => {
                  return {...prevState, loading: false}
                })
                setError({hasError: true, errorMsg: 'No matches found'})
                return
              }
              setSubmittedValue((prevState) => {
                return {...prevState, loading: false, submitted: true}
              })

              setMovies(resultArray);
              setError({hasError: false, errorMsg: ''})
            } catch (error) {
              console.log(error);
            }
          };
          fetchFun();
    },[submittedState.loading, searchParams, submittedState.query])
    
    const render = movies?.map(element => {
        return (
          <li  key={element.id}>
            <Link className={styles.link} onClick={() => onLinkClick()} state={{from: `/movies?query=${inputValue}`}} to={`/movies/${element.id}`}>
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