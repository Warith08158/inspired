<script setup>
import ceoImaage from '../../assets/images/ceo.png'
</script>
<template>
  <section class="py-4 md:py-6 lg:py-10 relative overflow-x-hidden overflow-y-hidden">
    <!-- gradient -->
    <div
      class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
    ></div>

    <div
      class="container flex flex-col items-start gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10"
    >
      <!-- first div -->
      <div class="space-y-6 lg:w-1/2">
        <!-- 1. -->
        <div class="flex items-center gap-3">
          <div class="border-t w-12 border-[#525596]"></div>
          <h1 class="font-light text-[#525596]">MEET ME</h1>
        </div>

        <!-- 2. -->
        <h1 class="text-left font-bold text-xl md:text-2xl lg:text-3xl text-purple-100">
          The Brain Behind Inspired
        </h1>

        <!-- 3 -->
        <div class="space-y-4 text-[#696984] text-base">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem accusantium
            aspernatur atque sed, veritatis beatae nulla aliquam
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem accusantium
            aspernatur atque sed, veritatis beatae nulla aliquam
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem accusantium
            aspernatur atque sed, veritatis beatae nulla aliquam exercitationem repellat harum
          </p>
        </div>

        <!-- 4. -->
        <div class="inline-block">
          <div class="flex items-center gap-3 rounded-full pl-4 border border-cyan-500">
            <p class="leading-none text-cyan-500">connect with me today</p>
            <div class="rounded-full p-2 border-l border-cyan-500">
              <svg
                class="w-6 h-6 text-cyan-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.4"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- second div -->
      <div class="lg:w-1/2 relative">
        <img :src="ceoImaage" alt="ceo-image" class="h-[90%] max-h-[500px] object-contain" />
        <div
          class="bg-white-100 rounded-md py-6 shadow-xl absolute -bottom-6 md:bottom-0 right-0 w-[90%] lg:w-[80%] border-l-8 border-[#F67766] px-6 flex flex-row gap-4 items-stretch"
        >
          <!-- line -->
          <div class="border-r border-[#BDBDD1]"></div>
          <div class="space-y-3 flex flex-col items-start gap-4">
            <p class="text-base text-[#5F5F7E]">
              "Thank you so much for your help. It's exactly what I've been looking for. You won't
              regret it. It really saves me time and effort. TOTC is exactly what our business has
              been lacking."
            </p>
            <div class="flex items-center justify-between w-full">
              <h1 class="text-[#5F5F7E] font-semibold">Anonymous</h1>
              <div class="flex items-end flex-col gap-1">
                <div>
                  <svg
                    width="106"
                    height="12"
                    viewBox="0 0 137 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9875 0L16.0742 6.36261L23.3883 8.28316L18.6 14.136L19.0336 21.6856L11.9875 18.9403L4.94142 21.6856L5.37504 14.136L0.58671 8.28316L7.90078 6.36261L11.9875 0Z"
                      fill="#FBA333"
                    />
                    <path
                      d="M40.2434 0L44.3301 6.36261L51.6441 8.28316L46.8558 14.136L47.2894 21.6856L40.2434 18.9403L33.1973 21.6856L33.6309 14.136L28.8426 8.28316L36.1566 6.36261L40.2434 0Z"
                      fill="#FBA333"
                    />
                    <path
                      d="M68.4992 0L72.5859 6.36261L79.9 8.28316L75.1117 14.136L75.5453 21.6856L68.4992 18.9403L61.4531 21.6856L61.8868 14.136L57.0984 8.28316L64.4125 6.36261L68.4992 0Z"
                      fill="#FBA333"
                    />
                    <path
                      d="M96.757 0L100.844 6.36261L108.158 8.28316L103.369 14.136L103.803 21.6856L96.757 18.9403L89.711 21.6856L90.1446 14.136L85.3562 8.28316L92.6703 6.36261L96.757 0Z"
                      fill="#FBA333"
                    />
                    <path
                      d="M125.013 0L129.1 6.36261L136.414 8.28316L131.625 14.136L132.059 21.6856L125.013 18.9403L117.967 21.6856L118.4 14.136L113.612 8.28316L120.926 6.36261L125.013 0Z"
                      fill="#FBA333"
                    />
                  </svg>
                </div>
                <p class="text-sm text-[#80819A]">12 reviews at yelp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
