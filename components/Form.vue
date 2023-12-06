<template>
  <div class="container">
    <form>
      <h3>Login</h3>
      <input v-model="user.email" type="email" placeholder="Email">
      <input v-model="user.password" type="password" placeholder="Password">
      <BaseButton @click.prevent="submit">Login</BaseButton>
      <p v-if="errorMessage" class="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
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
h3 {
  color: #fff;
  font-size: 2.3rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 2rem;
}
.container {
  background-color: black;
  max-width: 300px;
  height: 23rem;
  margin: 10rem auto;
  padding: 2.7rem 2.7rem;
  opacity: 90%;
}

form {
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  
}

input[type="email"] {
  height: 3.2rem;
  border-radius: 0.3rem;
  border: 1px solid #c9c9c9;
  margin-bottom: 1.2rem;
  background-color: rgb(22, 22, 22);
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
  margin-bottom: 2rem;
  background-color: rgb(22, 22, 22);
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

@media screen and (max-width: 600px) {
  .container {
    max-width: 200px;
  }
  .errorMessage {
    font-size: .8rem;
  }
}
</style>