export default async (genreId) => {
  try {
    const config = useRuntimeConfig()
    const API_BASE_URL = config.public.API_BASE_URL;
    const response = await $fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_BASE_URL}`);
    const genre = response.genres.find((g) => g.id === genreId);
    return genre ? genre.name : 'Unknown';
  } catch (error) {
    console.error('Error fetching genre information:', error);
    return 'Unknown';
  }
};