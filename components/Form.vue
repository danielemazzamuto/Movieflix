<template>
  <div>
    <div class="bg"></div>
    <div class="nav_container">
      <header>
        <h1>
          <p :class="{homepageLogo: homepageLogo, customLogo: customLogo}">MOVIEFLIX</p>
        </h1>
      </header>
    </div>
    <div class="container">
      <form>
        <h3>Login</h3>
        <input v-model="user.email" type="email" placeholder="Email">
        <input v-model="user.password" type="password" placeholder="Password">
        <BaseButton @click.prevent="submit">Login</BaseButton>
        <p v-if="errorMessage" class="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps({
  homepageLogo: Boolean,
  customLogo: Boolean,
})

const user = ref({
  email: "",
  password: ""
})

const errorMessage = ref("");

const credentials = reactive({
  email: "test@movieflix.com",
  password: "Movieflix24"
})

const submit = () => {
  if(user.value.email === credentials.email && user.value.password === credentials.password){
    errorMessage.value = "";
    console.log("logged in");
    user.value = {
      email: "",
      password: ""
    };
    navigateTo("/browse");
  } else {
    errorMessage.value = "";
    console.log("failed");
    errorMessage.value = "Username or password wrong!"
    user.value = {
      email: "",
      password: ""
    };
  }
}
</script>

<style scoped>
/* BACKGROUND IMAGE */
.bg {
  background: url("assets/hero.jpeg");
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
/* FORM */
.container {
  background-color: black;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  padding: 3rem 1.5rem;
  width: 400px;
  opacity: 85%
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem;
}
h3 {
  color: #fff;
  font-size: 2.3rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 3rem;
}
input[type="email"] {
  height: 3.2rem;
  border-radius: 0.3rem;
  border: 1px solid #c9c9c9;
  margin-bottom: 2rem;
  background-color: #010100;
  padding-left: 1rem;
  color: #fff;
  font-size: 1.1rem;
}
input[type="email"]::placeholder {
  color: #c9c9c9;
}
input[type="email"]:focus {
  color: #fff;
  font-size: 1.2rem;
}
input[type="password"] {
  height: 3.2rem;
  border-radius: 0.3rem;
  border: 1px solid #c9c9c9;
  margin-bottom: 3.5rem;
  background-color: #010100;
  padding-left: 1rem;
  color: #fff;
  font-size: 1.1rem;
}
input[type="password"]::placeholder {
  color: #c9c9c9;
}
input[type="password"]:focus {
  color: #fff;
  font-size: 1.2rem;
}
.errorMessage {
  color: #fff;
  margin-top: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
/* NAVBAR */
.nav_container {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
}
header {
  display: flex;
  max-width: 95%;
  margin: 1.5rem auto 0;
}
.customLogo {
  color: red;
  font-weight: bold;
  font-size: 1.3rem;
  text-shadow: 0 0 5px #000000;
  font-family: Arial, Helvetica, sans-serif;
}
/* MEDIA QUERY */
@media screen and (max-width: 600px) {
  .container {
    max-width: 200px;
  }
  .errorMessage {
    font-size: .8rem;
  }
}
</style>