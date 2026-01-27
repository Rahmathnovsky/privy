<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const headerRef = ref(null);
const isMenuOpen = ref(false);

const handleScroll = () => {
    if (window.scrollY > 50) {
        headerRef.value.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        headerRef.value.style.boxShadow = 'none';
    }
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header ref="headerRef">
        <div class="container navbar">
            <a href="#" class="logo">
                <img src="/privy-logo.png" alt="Privy Logo" style="height: 48px; width: auto;">
            </a>
            
            <div class="hamburger-menu" @click="toggleMenu">
                <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
            </div>

            <ul class="nav-links" :class="{ 'mobile-active': isMenuOpen }">
                <li><a href="#produk" @click="toggleMenu">Products</a></li>
                <li><a href="#solusi" @click="toggleMenu">Solutions</a></li>
                <li><a href="#harga" @click="toggleMenu">Pricing</a></li>
                <li><a href="#perusahaan" @click="toggleMenu">Company</a></li>
                <li><a href="#blog" @click="toggleMenu">Blog</a></li>
                
                <!-- Mobile Actions (Inside menu for mobile) -->
                <li class="mobile-only-actions">
                    <a href="#" class="btn btn-login full-width">Login</a>
                    <a href="#" class="btn btn-primary full-width">Register</a>
                </li>
            </ul>

            <!-- Desktop Actions -->
            <div class="nav-actions desktop-only">
                <a href="#" class="btn btn-login">Login</a>
                <a href="#" class="btn btn-primary">Register</a>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* While we mostly use src/style.css, we can add component-specific styles here */
.hamburger-menu {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--secondary-black);
}

.mobile-only-actions {
    display: none;
}

@media (max-width: 768px) {
    .hamburger-menu {
        display: block;
        position: absolute;
        right: 24px;
        top: 25px;
    }

    .desktop-only {
        display: none !important;
    }
}
</style>
