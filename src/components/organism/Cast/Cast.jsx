import React from "react";
import fetchApi from "components/Api";
import {useParams} from 'react-router-dom'
import { useState,useEffect } from "react";

const Cast = () => {
    const {movieId} = useParams()
    useEffect(() => {
        const fetchCast = async() => {
            try {
                const result = await fetchApi(`movie/${movieId}/credits`)
                console.log(result)
            } catch (error) {
                console.log(error)
            }
            }
    }, [movieId])
    
    // <li>
        // <img>
        // <p></p>
        // <p></p>
    // </li>
    return <ul><h1>Helooo</h1></ul>
}

export default Cast