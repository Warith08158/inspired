<script setup>
import serviceCardComponent from '@/components/serviceCard-component.vue'
</script>
<template>
  <section class="container space-y-8 md:space-y-10 py-4 md:py-6 lg:py-10">
    <article class="space-y-3">
      <h1 class="text-center font-bold text-xl md:text-2xl lg:text-3xl text-purple-100">
        Explore our <span class="text-teal-100">innovative learning</span> features
      </h1>

      <div class="flex justify-center">
        <p class="text-center text-purple-90 max-w-[700px]">
          Discover how our platform transforms education with interactive content, personalized
          learning paths, and flexible access
        </p>
      </div>
    </article>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <serviceCardComponent
        number="1"
        heading="Past Questions"
        subHeading="We provide your past questions to ace in your exam"
      />

      <serviceCardComponent
        number="2"
        heading="Resources"
        subHeading="Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"
      />

      <serviceCardComponent
        number="3"
        heading="Quizzes"
        subHeading="Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"
      />

      <serviceCardComponent
        number="4"
        heading="Grading"
        subHeading="Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"
      />
    </div>
  </section>
</template>
