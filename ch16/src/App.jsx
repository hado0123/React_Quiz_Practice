import { Route, Routes } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import GenreList from './components/GenreList'
import NotFound from './components/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<MovieList />} />
         <Route path="/genres" element={<GenreList />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
