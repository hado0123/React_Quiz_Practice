import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieGenres } from '../features/moviesSlice'

const GenreList = () => {
   const dispatch = useDispatch()
   const { movieGenres, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovieGenres())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>GenreList</h1>
         <ul>
            {movieGenres.map((genre) => (
               <li key={genre.id}>{genre.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default GenreList
