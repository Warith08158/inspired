<script setup>
import crownIcon from '@/assets/icons/crown-Icon.vue'
import linkComponent from '@/components/link-component.vue'
import studentImage from '@/assets/images/student.png'
import calendarIcon from '@/assets/icons/calendar-icon.vue'
import messageIcon from '@/assets/icons/message-icon.vue'
import sucessCard from '@/components/sucess-card.vue'
import statIcon from '@/assets/icons/stat-icon.vue'
import manOnline from '@/assets/images/man-online.png'
import arrowIconFill from '@/assets/icons/arrow-icon-fill.vue'
</script>
<template>
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">
    <!-- first div -->
    <div class="space-y-6 lg:w-1/2">
      <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl text-white-100">
        <span class="text-orange-100 relative"
          >Your
          <crownIcon class="absolute -left-6 -top-4 w-8" />
        </span>
        All-in-One Study Companion
      </h1>
      <p class="font-normal text-lg text-white-100 leading-3">
        INSPIRED helps students succeed with practice questions, past exams, quizzes, and
        personalized mentorship
      </p>

      <!-- links div -->
      <div class="flex flex-row items-center gap-6 flex-wrap">
        <linkComponent to="#" path="Join for free" class="bg-white-100/30 text-white-100" />
        <div class="flex items-center gap-2">
          <div class="rotate-90 bg-white-100 rounded-full p-3 text-cyan-400">
            <arrowIconFill />
          </div>
          <RouterLink to="#" class="font-medium text-blue-100"> See how it works </RouterLink>
        </div>
      </div>
    </div>

    <!-- second div-->
    <div class="relative lg:w-1/2">
      <img
        :src="studentImage"
        alt="student-image"
        class="h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] object-contain"
      />
      <sucessCard
        :icon="calendarIcon"
        title="250k"
        subtitle="Assisted student"
        class="absolute top-0"
      />

      <sucessCard
        :icon="messageIcon"
        title="Congratulations"
        subtitle="Your admission is completed"
        class="absolute top-24 right-0 lg:top-60"
      />

      <!-- for mobile -->
      <div
        class="bg-white-100/70 p-4 rounded-xl shadow-md inline-block absolute lg:hidden left-12 top-48"
      >
        <div class="flex flex-col items-center gap-3">
          <div class="flex items-center gap-2">
            <img :src="manOnline" alt="man" class="w-12 h-12 object-contain" />
            <div class="flex items-start flex-col">
              <h1 class="font-bold text-lg text-gray-100">User Experience class</h1>
              <time datetime="" class="text-[#545567] text-sm">Today at 12:00pm</time>
            </div>
          </div>
          <linkComponent to="#" path="join now" class="bg-[#D8587E] text-white-100" />
        </div>
      </div>

      <!-- for desktop -->
      <div
        class="hidden bg-white-100/70 p-4 rounded-xl shadow-md lg:inline-block absolute bottom-10 left-0"
      >
        <div class="flex flex-col items-center gap-3">
          <div class="flex items-center gap-2">
            <img :src="manOnline" alt="man" class="w-12 h-12 object-contain" />
            <div class="flex items-start flex-col">
              <h1 class="font-bold text-lg text-gray-100">User Experience class</h1>
              <time datetime="" class="text-[#545567] text-sm">Today at 12:00pm</time>
            </div>
          </div>
          <linkComponent to="#" path="join now" class="bg-[#D8587E] text-white-100" />
        </div>
      </div>

      <div class="hidden sm:block absolute top-0 right-0 bg-[#D8587E] rounded-lg p-2">
        <div class="bg-white-100 p-1 rounded-lg">
          <statIcon class="h-4 w-4" />
        </div>
      </div>
    </div>
  </section>
</template>
