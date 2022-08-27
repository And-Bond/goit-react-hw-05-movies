import { Routes,Route,NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Cast from "./organism/Cast/Cast";
import Reviews from "./organism/Reviews/Reviews";
export const App = () => {
  return (
    <>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Movies'>Movies</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/movies' element={<Movies />}/>
      <Route path='/movies/:movieId' element={<MovieDetails />} >
        <Route path="cast" element={<Cast />}/>
        <Route path="reviews" element={<Reviews />}/>
      </Route>
      <Route path="*" element={<Home />}/>
    </Routes>  
    </>
  );
};