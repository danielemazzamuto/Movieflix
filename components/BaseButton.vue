<template>
  <button>
    <slot />
  </button>
</template>

<script setup>

</script>

<style scoped>
button {
 padding: 6px 20px;
 background-color: #ff0000;
 color: white;
 border: none;
 border-radius: 0.3rem;
 font-weight: 800;
 font-size: 0.9rem;
 cursor: pointer;
 transition: 0.3s;
 height: 2.7rem
}
button:hover {
  background-color: #c50101;
}
</style>