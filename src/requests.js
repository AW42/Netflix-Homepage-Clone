const APIKEY = "006555bbef0e2a29d4c62c2fa10195da";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTrendingNow: `/trending/all/week?api_key=${APIKEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=35`,
  fetchRomanticMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=10749`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=99`
};

export default requests;
