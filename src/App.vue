<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import StatsSection from './components/StatsSection.vue';
import ClientMarquee from './components/ClientMarquee.vue';
import SolutionTabs from './components/SolutionTabs.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import PricingSection from './components/PricingSection.vue';
import CtaSection from './components/CtaSection.vue';
import FooterSection from './components/FooterSection.vue';
import ChatWidget from './components/ChatWidget.vue';

// Scroll Animation Observer (Global)
onMounted(() => {
    // We delay slightly to ensure DOM is rendered, though onMounted should suffice.
    // However, dynamic components might need nextTick. For this static structure, it's fine.
    
    // Select all elements that have the 'reveal' class
    // Note: Components must have 'reveal' class on their root or inner elements.
    // I added 'reveal' to the root sections in the components where appropriate.
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
</script>

<template>
  <NavBar />
  <main>
      <HeroSection />
      <StatsSection />
      <ClientMarquee />
      <SolutionTabs />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
  </main>
  <FooterSection />
  <ChatWidget />
</template>

<style>
/* Global resets are in style.css, checking imports */
/* #app is the root, usually we want it to take full width */
#app {
    width: 100%;
}
</style>
