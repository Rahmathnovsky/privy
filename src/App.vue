<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ClientLogosSection from './components/ClientLogosSection.vue';
import WorkflowSection from './components/WorkflowSection.vue';
import SecuritySection from './components/SecuritySection.vue';
import CollaborationSection from './components/CollaborationSection.vue';
import CustomerStoriesSection from './components/CustomerStoriesSection.vue';
import CtaSection from './components/CtaSection.vue';
import FooterSection from './components/FooterSection.vue';

// Smooth scroll for anchor links
onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
</script>

<template>
    <NavBar />
    <main>
        <HeroSection />
        <ClientLogosSection />
        <WorkflowSection />
        <SecuritySection />
        <CollaborationSection />
        <CustomerStoriesSection />
        <CtaSection />
    </main>
    <FooterSection />
</template>

<style>
/* Import global styles */
@import './style.css';

#app {
    width: 100%;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}
</style>
