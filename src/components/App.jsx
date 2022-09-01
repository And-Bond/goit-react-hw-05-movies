import { Routes,Route,NavLink } from "react-router-dom";
import {lazy,Suspense} from 'react'
import styles from './App.module.css'
import { useState } from "react";

const Home = lazy(() => import("./pages/Home/Home"))
const Movies = lazy(() => import("./pages/Movies/Movies"))
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"))
const Cast = lazy(() => import("./organism/Cast/Cast"))
const Reviews = lazy(() => import("./organism/Reviews/Reviews"))



export const App = () => {
  const [hesh, setHesh] = useState('home')
  const [querySave, setQuery] = useState(false)
  const navStyles = (e) => {
    if(e.isActive){
      return`${styles.nav__link} ${styles.nav__link_active}`
    }
    return styles.nav__link
  }
  const onMoviesClick = (e) => {
    const heshed = e.target.textContent.toLowerCase()
    setHesh(heshed)
  }
  const onHeshFun = () => {
    setHesh('movies')
  }
  const querySaveFun = ( state) => {
    setQuery(state)
  }
  console.log(querySave)
  console.log(hesh)
  return (
    <>
    <nav className={styles.nav}>
      <NavLink className={navStyles} onClick={onMoviesClick} to='/'>Home</NavLink>
      <NavLink className={navStyles} onClick={onMoviesClick} to='/movies'>Movies</NavLink>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/movies' element={<Movies queryChange={() => querySaveFun(false)} queryProp={querySave} onClick={onHeshFun}/>}/>
      <Route path='/movies/:movieId' element={<MovieDetails querySaveFun={querySaveFun} hesh={hesh}/>} >
        <Route path="cast" element={<Cast />}/>
        <Route path="reviews" element={<Reviews />}/>
      </Route>
      <Route path="*" element={<Home />}/>
    </Routes>  
    </Suspense>
    </>
  );
};

