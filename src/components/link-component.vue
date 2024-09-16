<script setup>
defineProps({
  to: String,
  path: String
})
</script>
<template>
  <RouterLink
    :to="to"
    class="text-white-pure font-medium text-base rounded-3xl px-6 py-2.5 shadow-md"
    >{{ path }}</RouterLink
  >
</template>
