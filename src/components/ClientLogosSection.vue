<script setup>
import { ref } from 'vue';

const clients = [
    { name: 'Prudential', logo: 'https://www.prudential.co.id/export/sites/prudential-id/.galleries/images/logos/logo-prudential.png' },
    { name: 'BRI Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_Life.svg/200px-BRI_Life.svg.png' },
    { name: 'Zurich', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Zurich_Logo_new.svg/200px-Zurich_Logo_new.svg.png' },
    { name: 'Manulife', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Manulife_logo.svg/200px-Manulife_logo.svg.png' },
    { name: 'Generali', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Generali_logo.svg/200px-Generali_logo.svg.png' },
    { name: 'AXA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/200px-AXA_Logo.svg.png' },
    { name: 'Bank BRI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/200px-BANK_BRI_logo.svg.png' },
    { name: 'Bank Mandiri', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/200px-Bank_Mandiri_logo_2016.svg.png' },
    { name: 'Bank BCA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/200px-Bank_Central_Asia.svg.png' },
    { name: 'Telkomsel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Telkomsel_2021_icon.svg/200px-Telkomsel_2021_icon.svg.png' },
    { name: 'Tokopedia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tokopedia.svg/200px-Tokopedia.svg.png' },
    { name: 'Gojek', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gojek_logo_2019.svg/200px-Gojek_logo_2019.svg.png' },
    { name: 'BNI', logo: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/200px-BNI_logo.svg.png' },
    { name: 'Pertamina', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pertamina_Logo.svg/200px-Pertamina_Logo.svg.png' }
];

const handleImageError = (event) => {
    event.target.style.display = 'none';
    event.target.parentElement.parentElement.classList.add('show-name');
};

// 3D Tilt effect
const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
};

const handleMouseLeave = (event) => {
    const card = event.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
};
</script>

<template>
    <section class="clients-section">
        <div class="container">
            <div class="section-header">
                <p class="trust-text">Dipercaya oleh perusahaan terkemuka di Indonesia</p>
            </div>
        </div>
        
        <!-- Marquee Container -->
        <div class="marquee-wrapper">
            <div class="marquee">
                <div class="marquee-content">
                    <div class="client-logo" 
                         v-for="(client, index) in clients" 
                         :key="client.name" 
                         :data-name="client.name"
                         :style="{ animationDelay: `${index * 0.1}s` }"
                         @mousemove="handleMouseMove"
                         @mouseleave="handleMouseLeave">
                        <div class="logo-inner">
                            <img :src="client.logo" :alt="client.name" :title="client.name" @error="handleImageError">
                            <span class="fallback-name">{{ client.name }}</span>
                        </div>
                        <div class="shine"></div>
                    </div>
                </div>
                <!-- Duplicate for seamless loop -->
                <div class="marquee-content" aria-hidden="true">
                    <div class="client-logo" 
                         v-for="(client, index) in clients" 
                         :key="client.name + '-dup'" 
                         :data-name="client.name"
                         :style="{ animationDelay: `${index * 0.1}s` }"
                         @mousemove="handleMouseMove"
                         @mouseleave="handleMouseLeave">
                        <div class="logo-inner">
                            <img :src="client.logo" :alt="client.name" :title="client.name" @error="handleImageError">
                            <span class="fallback-name">{{ client.name }}</span>
                        </div>
                        <div class="shine"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.clients-section {
    background: #0d0d0d;
    padding: 80px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    overflow: hidden;
}

.section-header {
    text-align: center;
    margin-bottom: 48px;
}

.trust-text {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
}

/* Marquee */
.marquee-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 10%,
        black 90%,
        transparent 100%
    );
    -webkit-mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 10%,
        black 90%,
        transparent 100%
    );
}

.marquee {
    display: flex;
    width: max-content;
    animation: scroll 40s linear infinite;
    gap: 0; /* Gap handled by padding-right in marquee-content */
}

.marquee:hover {
    animation-play-state: paused;
}

.marquee-content {
    display: flex;
    align-items: center;
    gap: 40px; /* Space between items */
    padding-right: 40px; /* Space after last item to match gap */
    flex-shrink: 0;
}

.client-logo {
    position: relative;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    min-width: 160px; /* Crucial: prevent shrinking */
    height: 80px;
    background: linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 16px 24px;
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Inner content for float animation and to hold fallback */
.logo-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    animation: float 3s ease-in-out infinite;
}

.client-logo:nth-child(odd) .logo-inner {
    animation-delay: 0s;
}

.client-logo:nth-child(even) .logo-inner {
    animation-delay: 1.5s;
}

.client-logo:hover {
    box-shadow: 0 15px 40px rgba(225, 32, 38, 0.3), 0 0 20px rgba(225, 32, 38, 0.1);
    border-color: var(--primary-red);
    z-index: 10; 
    transform: scale(1.05);
}

.client-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.client-logo:hover img {
    transform: scale(1.1);
}

/* Shine effect */
.shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
    );
    transform: skewX(-25deg);
    transition: left 0.6s ease;
}

.client-logo:hover .shine {
    left: 150%;
}

.fallback-name {
    display: none;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    text-align: center;
    line-height: 1.2;
    width: 100%;
}

/* When parent has show-name class, assume image error */
.client-logo.show-name .fallback-name {
    display: block;
}

.client-logo.show-name img {
    display: none;
}

/* Float animation */
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-4px);
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

/* Pulse glow on hover */
.client-logo::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    background: linear-gradient(45deg, var(--primary-red), #ff6b6b, var(--primary-red));
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
}

.client-logo:hover::before {
    opacity: 1;
    animation: pulse-border 1.5s ease-in-out infinite;
}

@keyframes pulse-border {
    0%, 100% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .clients-section {
        padding: 60px 0;
    }
    
    .client-logo {
        width: 130px;
        min-width: 130px;
        height: 65px;
        padding: 12px 16px;
    }
    
    .marquee-content {
        gap: 24px;
        padding-right: 24px;
    }
}
</style>
