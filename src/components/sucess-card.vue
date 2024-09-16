<script setup>
defineProps({
  icon: Object,
  title: String,
  subtitle: String
})
</script>
<template>
  <div class="bg-white-100/70 p-3 rounded-xl shadow-md inline-block">
    <div class="flex items-center gap-3">
      <!-- first div -->
      <icon />

      <!-- second div -->
      <div>
        <h1 class="font-bold text-lg text-gray-100">{{ title }}</h1>
        <p class="text-[#545567] text-sm">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>
