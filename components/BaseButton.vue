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
 border-radius: 0.25rem;
 font-weight: 400;
 font-size: 0.9rem;
 cursor: pointer;
 transition: 0.3s
}
button:hover {
  background-color: #c50101;
}
</style>