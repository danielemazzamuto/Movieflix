<template>
  <div>
    <Movies :customLogo="true"/>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
})
</script>
