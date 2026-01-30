<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 100);
});
</script>

<template>
    <section class="hero-section">
        <!-- Animated Background -->
        <div class="hero-bg">
            <div class="hero-gradient"></div>
            <div class="hero-glow"></div>
            <div class="hero-lines">
                <div class="line" v-for="n in 5" :key="n"></div>
            </div>
        </div>
        
        <!-- Hero Content -->
        <div class="container hero-content" :class="{ visible: isVisible }">
            <div class="hero-badge">
                <i class="fas fa-certificate"></i>
                <span>Indonesia's First Licensed PSrE Provider</span>
            </div>
            
            <h1 class="hero-title">
                Digital Trust<br>
                <span class="gradient-text">Starts Here</span>
            </h1>
            
            <p class="hero-description">
                With Privy, individuals and businesses come together on one platform 
                for secure digital signatures, identity verification, and document management.
            </p>
            
            <div class="hero-actions">
                <a href="#" class="btn btn-hero-primary">
                    Start Free Trial
                    <i class="fas fa-arrow-right"></i>
                </a>
                <a href="#" class="btn btn-hero-secondary">
                    Contact Sales
                </a>
            </div>
            
            <div class="hero-stats">
                <div class="stat">
                    <span class="stat-number">60M+</span>
                    <span class="stat-label">Documents Signed</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat">
                    <span class="stat-number">1,800+</span>
                    <span class="stat-label">Enterprise Clients</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat">
                    <span class="stat-number">40M+</span>
                    <span class="stat-label">Verified Users</span>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
            <span>Scroll to explore</span>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-top: 64px;
}

/* Animated Background */
.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

.hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--theme-bg-primary);
    transition: background 0.3s ease;
}

.hero-glow {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    height: 1000px;
    background: radial-gradient(circle, 
        var(--theme-glow-red-strong) 0%, 
        var(--theme-glow-red) 35%, 
        transparent 65%);
    animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
    50% { opacity: 1; transform: translateX(-50%) scale(1.15); }
}

.hero-lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.line {
    position: absolute;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, 
        transparent 0%, 
        rgba(225, 32, 38, 0.2) 50%, 
        transparent 100%);
    animation: lineFade 3s ease-in-out infinite;
}

.line:nth-child(1) { left: 20%; animation-delay: 0s; }
.line:nth-child(2) { left: 40%; animation-delay: 0.5s; }
.line:nth-child(3) { left: 50%; animation-delay: 1s; }
.line:nth-child(4) { left: 60%; animation-delay: 1.5s; }
.line:nth-child(5) { left: 80%; animation-delay: 2s; }

@keyframes lineFade {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
}

/* Hero Content */
.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 900px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.hero-content.visible {
    opacity: 1;
    transform: translateY(0);
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--theme-glow-red);
    border: 1px solid var(--primary-red);
    padding: 8px 20px;
    border-radius: 50px;
    margin-bottom: 32px;
}

.hero-badge i {
    color: var(--primary-red);
    font-size: 14px;
}

.hero-badge span {
    color: var(--theme-text-primary);
    font-size: 14px;
    font-weight: 500;
}

.hero-title {
    font-size: 80px;
    font-weight: 800;
    line-height: 1.1;
    color: var(--theme-text-primary);
    margin-bottom: 24px;
    letter-spacing: -2px;
}

.gradient-text {
    background: linear-gradient(135deg, var(--primary-red), #ff6b6b, var(--primary-red));
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.hero-description {
    font-size: 20px;
    color: var(--theme-text-secondary);
    line-height: 1.6;
    max-width: 650px;
    margin: 0 auto 40px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 60px;
}

.btn-hero-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--primary-red);
    color: var(--theme-text-primary);
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(225, 32, 38, 0.3);
}

.btn-hero-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(225, 32, 38, 0.4);
}

.btn-hero-primary i {
    transition: transform 0.3s ease;
}

.btn-hero-primary:hover i {
    transform: translateX(4px);
}

.btn-hero-secondary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    color: var(--theme-text-primary);
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid var(--theme-border-hover);
    transition: all 0.3s ease;
}

.btn-hero-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
}

/* Stats */
.hero-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.stat-number {
    font-size: 32px;
    font-weight: 800;
    color: var(--theme-text-primary);
}

.stat-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
}

.stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    animation: bounce 2s ease-in-out infinite;
}

.mouse {
    width: 24px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 8px;
}

.wheel {
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    animation: scrollWheel 1.5s ease-in-out infinite;
}

@keyframes scrollWheel {
    0%, 100% { opacity: 1; transform: translateY(0); }
    50% { opacity: 0.3; transform: translateY(6px); }
}

.scroll-indicator span {
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
    letter-spacing: 1px;
}

@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 48px;
        letter-spacing: -1px;
    }
    
    .hero-description {
        font-size: 16px;
        padding: 0 20px;
    }
    
    .hero-actions {
        flex-direction: column;
        padding: 0 20px;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 24px;
    }
    
    .stat-divider {
        display: none;
    }
    
    .scroll-indicator {
        display: none;
    }
}
</style>

