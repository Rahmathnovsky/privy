<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeDropdown = ref(null);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const openDropdown = (name) => {
    activeDropdown.value = name;
};

const closeDropdown = () => {
    activeDropdown.value = null;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header :class="{ 'scrolled': isScrolled }">
        <div class="container navbar">
            <div class="nav-left">
                <a href="#" class="logo">
                    <img src="/privy-logo.png" alt="Privy" style="height: 32px; width: auto;">
                </a>
                
                <!-- Desktop Navigation -->
                <nav class="nav-menu">
                    <!-- Platform Dropdown -->
                    <div class="nav-item has-dropdown" 
                         @mouseenter="openDropdown('platform')" 
                         @mouseleave="closeDropdown">
                        <span class="nav-link">Platform <i class="fas fa-chevron-down"></i></span>
                        <div class="mega-dropdown" :class="{ active: activeDropdown === 'platform' }">
                            <div class="dropdown-grid">
                                <div class="dropdown-column">
                                    <h4>DIGITAL SIGNATURE</h4>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-signature"></i>
                                        <div>
                                            <strong>PrivySign</strong>
                                            <span>Legally certified e-signature</span>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-file-contract"></i>
                                        <div>
                                            <strong>Document Workflow</strong>
                                            <span>Automate approval processes</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="dropdown-column">
                                    <h4>IDENTITY VERIFICATION</h4>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-id-card"></i>
                                        <div>
                                            <strong>PrivyIdentity</strong>
                                            <span>Real-time identity verification</span>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-user-check"></i>
                                        <div>
                                            <strong>Biometric Auth</strong>
                                            <span>Face recognition & liveness</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="dropdown-column">
                                    <h4>SECURITY</h4>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-stamp"></i>
                                        <div>
                                            <strong>e-Seal</strong>
                                            <span>Digital stamp & e-Meterai</span>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-shield-alt"></i>
                                        <div>
                                            <strong>Enterprise Security</strong>
                                            <span>ISO 27001 certified protection</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Solutions Dropdown -->
                    <div class="nav-item has-dropdown"
                         @mouseenter="openDropdown('solutions')" 
                         @mouseleave="closeDropdown">
                        <span class="nav-link">Solutions <i class="fas fa-chevron-down"></i></span>
                        <div class="mega-dropdown" :class="{ active: activeDropdown === 'solutions' }">
                            <div class="dropdown-grid">
                                <div class="dropdown-column">
                                    <h4>BY USE CASE</h4>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-user"></i>
                                        <div>
                                            <strong>Personal</strong>
                                            <span>For individual users</span>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-building"></i>
                                        <div>
                                            <strong>Enterprise</strong>
                                            <span>For large organizations</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="dropdown-column">
                                    <h4>BY INDUSTRY</h4>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-university"></i>
                                        <div>
                                            <strong>Banking & Finance</strong>
                                            <span>Secure financial documents</span>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-heartbeat"></i>
                                        <div>
                                            <strong>Healthcare</strong>
                                            <span>Compliant medical records</span>
                                        </div>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                        <i class="fas fa-landmark"></i>
                                        <div>
                                            <strong>Government</strong>
                                            <span>Digital public services</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <a href="#" class="nav-item nav-link">Pricing</a>
                    <a href="#" class="nav-item nav-link">Resources</a>
                </nav>
            </div>
            
            <div class="nav-right">
                <a href="#" class="nav-link sign-in">Sign in</a>
                <a href="#" class="btn btn-nav-primary">Start Free Trial</a>
            </div>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-toggle" @click="toggleMobileMenu">
                <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
            </button>
        </div>
        
        <!-- Mobile Menu -->
        <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
            <nav class="mobile-nav">
                <a href="#" class="mobile-link">Platform</a>
                <a href="#" class="mobile-link">Solutions</a>
                <a href="#" class="mobile-link">Pricing</a>
                <a href="#" class="mobile-link">Resources</a>
                <div class="mobile-actions">
                    <a href="#" class="btn btn-outline-mobile">Sign in</a>
                    <a href="#" class="btn btn-primary-mobile">Start Free Trial</a>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: rgba(26, 26, 26, 0.8);
    backdrop-filter: blur(12px);
    z-index: 1000;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

header.scrolled {
    background: rgba(26, 26, 26, 0.95);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.nav-left {
    display: flex;
    align-items: center;
    gap: 32px;
}

.logo {
    display: flex;
    align-items: center;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 4px;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px;
    transition: all 0.2s ease;
    cursor: pointer;
}

.nav-link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

.nav-link i {
    font-size: 10px;
    transition: transform 0.2s ease;
}

.has-dropdown:hover .nav-link i {
    transform: rotate(180deg);
}

/* Mega Dropdown */
.mega-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    min-width: 600px;
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 24px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.mega-dropdown.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}

.dropdown-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.dropdown-column h4 {
    font-size: 11px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 1px;
    margin-bottom: 16px;
    padding-left: 8px;
}

.dropdown-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 8px;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.dropdown-item:hover {
    background: rgba(225, 32, 38, 0.1);
}

.dropdown-item i {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(225, 32, 38, 0.15);
    color: var(--primary-red);
    border-radius: 8px;
    font-size: 14px;
}

.dropdown-item div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.dropdown-item strong {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
}

.dropdown-item span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
}

/* Nav Right */
.nav-right {
    display: flex;
    align-items: center;
    gap: 16px;
}

.sign-in {
    color: rgba(255, 255, 255, 0.85);
}

.btn-nav-primary {
    background: var(--primary-red);
    color: #fff;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s ease;
}

.btn-nav-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

/* Mobile */
.mobile-toggle {
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
}

.mobile-menu {
    display: none;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1a1a1a;
    padding: 24px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
}

.mobile-menu.active {
    transform: translateX(0);
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.mobile-link {
    padding: 16px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
}

.btn-outline-mobile {
    padding: 14px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
}

.btn-primary-mobile {
    padding: 14px;
    text-align: center;
    background: var(--primary-red);
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
}

@media (max-width: 1024px) {
    .nav-menu {
        display: none;
    }
    
    .nav-right {
        display: none;
    }
    
    .mobile-toggle {
        display: block;
    }
    
    .mobile-menu {
        display: block;
    }
}
</style>

