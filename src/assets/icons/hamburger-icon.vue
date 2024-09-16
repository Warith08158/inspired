<script setup>
defineProps({
  className: String
})
</script>
<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="className">
    <path
      d="M5 8H13.75M5 12H19M10.25 16L19 16"
      stroke="#ffffffff"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
