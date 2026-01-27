<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
const totalSlides = 2;
let slideInterval;

const goToSlide = (index) => {
    currentSlide.value = index;
    resetTimer();
};

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

const resetTimer = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
};

onMounted(() => {
    resetTimer();
});

onUnmounted(() => {
    clearInterval(slideInterval);
});
</script>

<template>
    <section class="hero-carousel">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
            <!-- Slide 1: Personal (Red Theme) -->
            <div class="carousel-slide slide-1">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                    class="slide-bg" alt="Bg">
                <div class="slide-overlay"></div>
                <div class="container hero-container">
                    <div class="hero-text-content">
                        <div class="tag-pill">
                            <i class="fas fa-check-circle"></i> The World's Trusted Digital Identity
                        </div>
                        <h1>Privy Personal Plan: Your Identity, Your Signature</h1>
                        <p>One subscription for secure signing, storing, verifying, and applying digital seals in your
                            documents anytime, anywhere.</p>
                        <a href="#" class="btn-glow">Get Privy Personal Plan <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="hero-visuals">
                        <div class="float-card card-1">
                            <i class="fas fa-file-signature"></i>
                            <span>Unlimited Sign</span>
                        </div>
                        <div class="float-card card-2">
                            <i class="fas fa-hdd"></i>
                            <span>Secure Storage</span>
                        </div>
                        <div class="float-card card-3">
                            <i class="fas fa-cloud-upload-alt"></i>
                            <span>Upload & Send Freely</span>
                        </div>
                        <div class="video-thumbnail">
                            <div class="play-btn"><i class="fas fa-play"></i></div>
                            <div class="vid-text">
                                <span>Why Millions Trust Privy</span>
                                <p>See how Privy simplifies digital trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Business (Blue/Dark Theme) -->
            <div class="carousel-slide slide-2">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                    class="slide-bg" alt="Bg">
                <div class="slide-overlay"></div>
                <div class="container hero-container">
                    <div class="hero-text-content">
                        <div class="tag-pill" style="border-color: #4299E1; background: rgba(66, 153, 225, 0.1);">
                            <i class="fas fa-building" style="color: #4299E1;"></i> Trusted by 1,800+ Global Companies
                        </div>
                        <h1>Build Digital Trust at Every Step of Business</h1>
                        <p>Verify identities, onboard users, and secure high-volume transactions with our
                            regulatory-grade infrastructure.</p>
                        <a href="#" class="btn-glow">Contact Sales for Business <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="hero-visuals">
                        <div class="float-card card-1">
                            <i class="fas fa-users-cog"></i>
                            <span>User Management</span>
                        </div>
                        <div class="float-card card-2">
                            <i class="fas fa-shield-alt"></i>
                            <span>Enterprise Security</span>
                        </div>
                        <div class="float-card card-3">
                            <i class="fas fa-plug"></i>
                            <span>API Integration</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navigation -->
        <div class="carousel-nav">
            <div class="nav-dot" :class="{ active: currentSlide === 0 }" @click="goToSlide(0)"></div>
            <div class="nav-dot" :class="{ active: currentSlide === 1 }" @click="goToSlide(1)"></div>
        </div>
    </section>
</template>
