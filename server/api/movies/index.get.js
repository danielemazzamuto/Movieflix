export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
    const API_BASE_URL = config.public.API_BASE_URL;
  const data = await $fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_BASE_URL}`);

  return data ;
})