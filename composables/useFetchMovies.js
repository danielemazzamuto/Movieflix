export default async () => {
  const { data, error, refresh } = await useFetch(`/api/movies`);
  if(error.value){
    throw createError({
      ...error.value,
      statusMessage: 'Unable to fetch movies',
    })
  }
  return {data, refresh}
}