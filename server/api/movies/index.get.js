export default defineEventHandler(() => {
  const data = $fetch('https://api.themoviedb.org/3/discover/movie?api_key=6e86b21c7589e905a689bbf6ad1bb079');

  return data ;
})