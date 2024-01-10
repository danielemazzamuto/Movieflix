export default defineNuxtRouteMiddleware((to, from) => {
  const loggedIn = useCookie(
    'loggedIn',
    {
      default: () => ('false'),
      watch: true,
    },
  )
  if (loggedIn.value) return;
    return navigateTo('/login')
  
})