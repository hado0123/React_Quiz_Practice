import axios from 'axios'

// TMDB API 기본 URL과 API 키 설정
const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

// axios 인스턴스 생성
const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

// 현재 상영중인 영화 가져오기
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/now_playing', {
      params: {
         language: 'ko-KR',
         page, //page: page
         region: 'KR',
      },
   })
   return response
}

// 영화 상세 정보 가져오기
export const getMovieDetails = async (movieId) => {
   // https://api.themoviedb.org/3/movie/{movie_id}
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      //쿼리스트링
      params: {
         language: 'ko-KR',
      },
   })
   return response //응답결과 데이터 리턴
}

// 장르 목록 가져오기
export const getGenres = async () => {
   const response = await tmdbApi.get('/genre/movie/list', {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

export default tmdbApi
