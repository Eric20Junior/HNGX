import React, { useEffect, useState } from 'react'
import expand from '../../assets/See-more.png'
import fav from '../../assets/Favorite.svg'
import imdb from '../../assets/imdb.svg'
import tomato from '../../assets/tomato.svg'
import axiosInstance  from '../../utilis/axiosInstance'

import { Link } from 'react-router-dom'

export const MovieCard = () => {

  const [getMovies, setGetMovies] = useState([])
  const [displayCount, setDisplayCount] = useState(10)
  const [favorite, setFavorite] = useState({})


  useEffect(() => {
    const getMovies = async () => {
      try {
        const api_key = localStorage.getItem('api_key')
        // console.log(api_key)

        if(!api_key) {
          console.log('Error in processing api')
          return
        }

        const response = await axiosInstance.get(`/movie/top_rated?api_key=${api_key}`, {
          params: {
            language: 'en-US', 
            page: '1',
          },
          headers: {
            Authorization: `Bearer ${api_key}` 
          }
        })
        setGetMovies(response.data.results)
        console.log(response.data.results)

        const movieFavorites = {};
        response.data.results.forEach((movie) => {
          movieFavorites[movie.id] = false;
        });
        setFavorite(movieFavorites);
      } catch (error) {
        throw(error)
      }
    }
    
    getMovies()
  },[])

  const handleSeeMoreClick = () => {
    setDisplayCount(displayCount + 10)
  }
  
  const handleFavoriteClick = (movieId) => {
    // Toggle the favorite state for the clicked movie
    setFavorite((prevFavorites) => ({
      ...prevFavorites,
      [movieId]: !prevFavorites[movieId],
    }));
  };

  
  return (
    <div className='sm:px-[60px] pt-8 px-[20px]'>
      <div className="card-text flex justify-between">
        <h1 className='font-bold text-2xl'>Featured Movie</h1>
        {displayCount < getMovies?.length && (
          <img src={expand} alt="expand" className='w-14 h-6 sm:w-16 cursor-pointer' onClick={handleSeeMoreClick} />
        )}
      </div>



      <div className='card grid place-items-center grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-4'>
  
        {getMovies?.slice(0, displayCount)?.map((movie) => (
          <div key={movie.id} className="pt-8" data-testid='movie-card'>
          <Link to={`/dashboard/movies/${movie.id}`}>
          <div className="image">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="PosterImage" data-testid='movie-poster' className='h-[170px] sm:h-[220px] ' />
          </div>
          </Link>
            <img src={fav} alt="favorite" className={`relative left-[80px] bottom-[165px] sm:left-[110px] sm:bottom-[210px] cursor-pointer ${favorite[movie.id] ? 'bg-red-700' : ''}`}
            onClick={() => handleFavoriteClick(movie.id)}
             />
          <div className="movie-info">
            <span className='text-[10px] text-[#9CA3AF]' data-testid='movie-release-date'>USA, {movie.release_date}</span>
            <h1 className='text-sm font-bold w-[50px] sm:w-[190px] lg:w-[200px] ' data-testid='movie-title'>{movie.title}</h1>
            <div className="rating flex justify-between w-[140px] sm:w-[150px] text-xs sm:text-[12px] py-1">
                  <div className='imdb-rating flex space-x-1'>
                      <img src={imdb} alt="rating-1" className='w-[35%]' />
                      <span className='text-[#111827]'>{movie.vote_average}</span>
                  </div>
  
                  <div className="rating-2 flex space-x-1">
                      <img src={tomato} alt="rating-2" className='w-[30%]' />
                      <span className='text-[#111827]'>97%</span>
                  </div>
              </div>
            <span className='text-[10px] text-[#9CA3AF]'>Action, Adventure, Horror</span>
          </div>
        </div>
        ))}


      </div>
    </div>
  )
}
