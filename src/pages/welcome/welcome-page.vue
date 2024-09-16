<script setup>
import navBarSection from './navBar-section.vue'
import heroSection from './hero-section.vue'
import featureOverviewSection from './featureOverview-section.vue'
import howItWorksSection from './howItWorks-section.vue'
import featureSection from './feature-section.vue'
import pricingSection from './pricing-section.vue'
import faqSection from './faq-section.vue'
import footerSection from './footer-section.vue'
import meetCEOsection from './meetCEO-section.vue'
</script>
<template>
  <!-- HEADER -->
  <header class="bg-cyan-500">
    <div class="container space-y-16 md:space-y-20 lg:space-y-28">
      <!-- NAVIGATION BAR -->
      <navBarSection />

      <!-- HERO -->
      <heroSection />
    </div>
  </header>

  <!-- MAIN -->
  <main class="mt-12 md:mt-16 lg:mt-20 space-y-12 md:space-y-16 lg:space-y-20">
    <!-- FEATURE OVERIEW -->
    <featureOverviewSection />

    <!-- HOW IT WORKS -->
    <section class="bg-[#F1F2F4] py-4 md:py-6 lg:py-10">
      <howItWorksSection />
    </section>

    <!-- FEATURE -->
    <featureSection />

    <!-- PRICING -->
    <pricingSection />

    <!-- FAQ -->
    <faqSection />

    <!-- MEET CEO -->
    <meetCEOsection />
  </main>

  <!-- FOOTER -->
  <section class="bg-[#18191C]">
    <footerSection />
  </section>
</template>
