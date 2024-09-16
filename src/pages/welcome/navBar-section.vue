<script setup>
import logoIcon from '@/assets/icons/logo-icon.vue'
import hamburgerIcon from '@/assets/icons/hamburger-icon.vue'
import linkComponent from '@/components/link-component.vue'
</script>
<template>
  <section
    class="sticky top-0 z-10 bg-cyan-500 flex items-center justify-between rounded-3xl shadow-lg p-3"
  >
    <!-- LOGO -->
    <div class="w-20 md:w-24"><logoIcon /></div>

    <!-- NAVIGATION LINKS -->
    <nav>
      <ul class="md:flex flex-row items-center gap-6 hidden lg:gap-10 text-base text-white-100">
        <li><RouterLink to="#">Home</RouterLink></li>
        <li><RouterLink to="#">Courses</RouterLink></li>
        <li><RouterLink to="#">Career</RouterLink></li>
        <li><RouterLink to="#">Blog</RouterLink></li>
      </ul>
    </nav>

    <!-- AUTH LINKS -->
    <nav>
      <ul class="hidden md:flex md:items-center md:gap-6">
        <li><linkComponent to="#" path="Login" class="bg-white-100/70 text-gray-600" /></li>
        <li><linkComponent to="#" path="Sign Up" class="text-white-100" /></li>
      </ul>
    </nav>

    <!-- HAMBURGER -->
    <button class="md:hidden" type="button">
      <hamburgerIcon className="w-10" />
    </button>
  </section>
</template>
