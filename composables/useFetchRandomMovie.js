export default async () => {
  const { data, error, refresh } = await useFetch(`/api/movies`);

  if(error.value){
    throw createError({
      ...error.value,
      statusMessage: 'Unable to fetch movies',
    })
  }
  const randomNumber = Math.floor(Math.random() * 18);
  const randomMovie = data.value.results[randomNumber];
  return {randomMovie, refresh}
}