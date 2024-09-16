<script setup>
import markIcon from '../../assets/icons/mark-icon.vue'
import timesIcon from '../../assets/icons/times-icon.vue'
</script>
<template>
  <section class="overflow-x-hidden relative border-t border-b border-[#A0ABBB]">
    <!-- gradient -->
    <div class="absolute top-0 -z-10 h-full w-full bg-white">
      <div
        class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"
      ></div>
    </div>

    <div class="container space-y-8 md:space-y-10 py-4 md:py-6 lg:py-10">
      <!-- article -->
      <article class="space-y-3">
        <h1 class="text-left font-bold text-xl md:text-2xl lg:text-3xl text-purple-100">
          It is <span class="text-teal-100">Affordable</span>
        </h1>
        <blockquote class="text-left text-purple-90 max-w-[700px]">
          <strong>Inspired</strong> means <strong>"inspire Education"</strong>, but shortened to
          <strong>Inspired</strong>, is a platform developed to help student excel in their
          education
        </blockquote>
      </article>
      <!-- pricing -->
      <div class="flex flex-col sm:flex-row justify-start gap-4 md:gap-12">
        <!-- first div -->
        <div class="bg-white-100 p-4 max-w-[330px] border border-[#A0ABBB] rounded-md">
          <h1 class="text-blue-70 font-medium text-xl leading-none">freebie</h1>
          <p class="text-purple-90 mt-4 max-w-[320px]">
            Ideal for individuals who need quick access to basic features.
          </p>
          <div class="flex items-center gap-2">
            <h1 class="text-4xl font-semibold my-4">#0</h1>
            <p class="text-purple-90 text-sm font-normal">/MONTH</p>
          </div>

          <div class="py-1 border-2 border-[#1D4ED8] block pl-3 rounded-md">
            <RouterLink to="#" class="text-[#1D4ED8] text-base">Get Stated Now</RouterLink>
          </div>

          <ol class="mt-6 space-y-3">
            <li class="text-[#191D23] text-base flex items-center gap-3">
              <markIcon />
              <p>Acess to all past questions</p>
            </li>
            <li class="text-[#191D23] text-base flex items-center gap-3">
              <markIcon />
              <p>Access to all available resources</p>
            </li>
            <li class="text-base text-[#A0ABBB] flex items-center gap-3">
              <timesIcon />
              <p>custom icons and fonts</p>
            </li>
            <li class="text-base text-[#A0ABBB] flex items-center gap-3">
              <timesIcon />
              <p>Unlimited Sharing</p>
            </li>
            <li class="text-base text-[#A0ABBB] flex items-center gap-3">
              <timesIcon />
              <p>graphics & video in up to 4k</p>
            </li>
            <li class="text-base text-[#A0ABBB] flex items-center gap-3">
              <timesIcon />
              <p>Unlimited Projects</p>
            </li>
            <li class="text-base text-[#A0ABBB] flex items-center gap-3">
              <timesIcon />
              <p>Instant Access to our design system</p>
            </li>
            <li class="text-base text-[#A0ABBB] flex items-center gap-3">
              <timesIcon />
              <p>Create teams to collaborate on designs</p>
            </li>
          </ol>
        </div>
        <!-- second div -->
        <div class="bg-[#1D4ED8] rounded-md p-4 max-w-[330px]">
          <h1 class="text-white-100 font-medium text-xl leading-none">Professional</h1>
          <p class="text-[#F7F8F9] mt-4 max-w-[320px]">
            Ideal for individuals who need quick access to basic features.
          </p>
          <div class="flex items-center gap-2">
            <h1 class="text-4xl font-semibold my-4 text-white-100">#2K</h1>
            <p class="text-sm font-normal text-[#F7F8F9]">/MONTH</p>
          </div>

          <div class="py-1 border-2 border-[#1D4ED8] block pl-3 rounded-md bg-white-100">
            <RouterLink to="#" class="text-[#1D4ED8] text-base">Get Stated Now</RouterLink>
          </div>

          <ol class="mt-6 space-y-3">
            <li class="text-white-100 text-base flex items-center gap-3">
              <markIcon />
              <p>Acess to all past questions</p>
            </li>
            <li class="text-white-100 text-base flex items-center gap-3">
              <markIcon />
              <p>Acess to all available resources</p>
            </li>
            <li class="text-white-100 text-base flex items-center gap-3">
              <markIcon />
              <p>custom icons and fonts</p>
            </li>
            <li class="text-white-100 ext-base flex items-center gap-3">
              <markIcon />
              <p>Unlimited Sharing</p>
            </li>
            <li class="text-white-100 text-base flex items-center gap-3">
              <markIcon />
              <p>graphics & video in up to 4k</p>
            </li>
            <li class="text-white-100 text-base flex items-center gap-3">
              <markIcon />
              <p>Unlimited Projects</p>
            </li>
            <li class="text-white-100 text-base flex items-center gap-3">
              <markIcon />
              <p>Instant Access to our design system</p>
            </li>
            <li class="text-white-100 text-base flex items-center gap-3">
              <markIcon />
              <p>Create teams to collaborate on designs</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
