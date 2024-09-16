<script setup>
defineProps({
  number: String,
  heading: String,
  subHeading: String
})
</script>
<template>
  <div class="p-6 bg-blue-10">
    <div class="space-y-3">
      <div
        class="leading-none relative rounded-md flex items-center flex-row justify-center bg-blue-50 w-10 h-10"
      >
        <div
          class="rounded-bl-md h-[80%] rounded-tr-md px-1 bg-orange-10 absolute bottom-0 left-0"
        ></div>
        <div class="px-1"></div>
        <h1 class="text-white-100 font-bold text-xl">{{ number }}</h1>
      </div>
      <h1 class="text-blue-70 font-medium text-xl leading-none">{{ heading }}</h1>
      <p class="text-blue-80 text-base">
        {{ subHeading }}
      </p>
    </div>
  </div>
</template>
