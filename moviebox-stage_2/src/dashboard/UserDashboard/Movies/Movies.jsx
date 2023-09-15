import React, { useEffect, useState } from 'react'
import poster from '../../../assets/showtimes.png'
import axiosInstance from '../../../utilis/axiosInstance'
import { useParams } from 'react-router-dom'

export const Movies = () => {

    const [movieDetails, setMovieDetails] = useState([])
    const params = useParams()
    const movie_id = params.id
    console.log(movie_id)

    useEffect(() => {
        const getMovieDetail = async () => {
            try {
                const api_key = localStorage.getItem('api_key')
        
                const response = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&append_to_response=videos`, {
                  headers: {
                    Authorization: `Bearer ${api_key}` 
                  },
                })
                setMovieDetails(response.data)
                console.log(response.data)
              } catch (error) {
                  console.error('Error fetching movie details', error)
                throw(error)
        }
    }
        getMovieDetail()
    },[])

     // Check if there's a video available
  const trailerVideo = movieDetails.videos?.results?.find((video) => video.type === 'Trailer' && video.site === 'YouTube');
    
  return (

        <div>
            {movieDetails ? (
            <>
                <div className='border h-[220px] rounded-xl text-center font-[Poppins]'>
                    {trailerVideo ? (
                        <iframe
                        src={`https://www.youtube.com/embed/${trailerVideo.key}`}
                        title="YouTube Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className='rounded-xl w-full h-[300px]'
                      ></iframe>
                    ) : (
                        <h1>No Trailer Available</h1>
                    )}
                </div>

            <div className="info block sm:flex sm:justify-between text-sm font-semibold pt-24 px-1">
                <div className='sm:flex block  space-y-2 sm:space-x-2 sm:space-y-0.5'>
                <h1 className='pt-0.5 text-sm text-[#404040]' data-testid='movie-title'>{movieDetails.title} •</h1>
                        <div className='text-[#404040] space-x-2 text-sm'>
                            <span data-testid='movie-release-date'>{movieDetails.release_date} •</span> 
                            <span>PG-13</span> 
                            <span data-testid='movie-runtime'>• {movieDetails.runtime}</span>
                        </div>
                <span className="genres flex space-x-2 text-xs text-red-700 pt-0.5">
                    <p className='border sm:h-5 border-red-200 text-center rounded-full w-full'>{movieDetails.genres?.[0]?.name}</p>
                    <p className='border border-red-200 text-center sm:h-5 rounded-full w-full'>{movieDetails.genres?.[1]?.name}</p>
                </span>
                </div>

                <span className="rating text-xs pt-1">8.5|350k</span>
            </div>

            <div className="movie-details sm:flex flex-1 pt-4" >
                <div className='text-[13px] text-[#333333] sm:pr-1'>
                    <p data-testid='movie-overview'>{movieDetails.overview}</p>

                    <div className='movie-cast pt-8 text-xs space-y-6'>
                        <p>Director: <span className='text-red-700'>Joseph Kosinski</span></p>
                        <p>Writers: <span className='text-red-700'>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                        <p>Stars: <span className='text-red-700'>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                    </div>

                    <div className='border lg:w-[900px] rounded-md h-8 flex space-x-2 mt-10 text-xs'>
                        <p className='bg-red-500 w-[150px] sm:p-1.5 rounded-md text-white font-bold text-center'>Top rated movie #65</p>
                        <p className='sm:p-1.5'>Awards 9 nominations</p>
                    </div>
                </div>
                <div className='lg:w-[320px] pt-4 space-y-2     sm:space-y-2 font-semibold text-xs'>
                        <p className='bg-[#BE123C] text-white h-[35px] rounded-md text-center py-2'>See Showtimes</p>
                        <p className='bg-red-200 border border-red-700 h-[35px] rounded-md text-center py-2'>See Showtimes</p>
                    <div className='grid grid-cols-1 gap-1 pt-4'>
                        <img src={poster} alt="showtimes" className='w-[800px]' />
                </div>
                </div>
            </div>
            </>
            ) : null}
        </div>
  )
}
