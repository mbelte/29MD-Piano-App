<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
      <RouterLink to="/" class="navbar__item" active-class="">Home</RouterLink>
      <RouterLink to="/piano" class="navbar__item">Piano</RouterLink>
  </nav>
</template>
