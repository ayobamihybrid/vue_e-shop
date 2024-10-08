<template>
  <div>
    <!-- Your page content will go here -->
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Load WebFont
  WebFont.load({
    google: { families: ['Space Mono:regular,italic,700,700italic'] },
  });

  // Add class to html element
  const html = document.documentElement;
  html.classList.add('w-mod-js');
  if (
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
  ) {
    html.classList.add('w-mod-touch');
  }
});
</script>

<style>
@import url('css/normalize.css');
@import url('css/webflow.css');
@import url('css/mdlr-28e2c3.webflow.css');

/* You can add your global styles here */
</style>
