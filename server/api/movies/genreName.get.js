export default defineEventHandler(async (genreId) => {
  try {
    const response = await $fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=6e86b21c7589e905a689bbf6ad1bb079`);
    const genre = response.genres.find((g) => +g.id === genreId);
    return genre ? genre.name : 'Unknow'
  } catch (error) {
    console.error('Error fetching genre information:', error);
    return 'Unknown';
  }
})