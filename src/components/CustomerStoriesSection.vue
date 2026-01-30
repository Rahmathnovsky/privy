<script setup>
import { ref } from 'vue';

const stories = [
    {
        industry: 'Banking & Finance',
        logo: 'https://logo.clearbit.com/bca.co.id',
        company: 'Bank BCA',
        quote: 'Privy streamlines customer onboarding and reduces document processing time by 85%',
        color: '#1a237e'
    },
    {
        industry: 'Insurance',
        logo: 'https://logo.clearbit.com/prudential.co.id',
        company: 'Prudential Indonesia',
        quote: 'Digital signatures accelerated policy issuance from days to minutes',
        color: '#c62828'
    },
    {
        industry: 'Government',
        logo: 'https://logo.clearbit.com/kominfo.go.id',
        company: 'Kominfo',
        quote: 'Enabled secure digital public services for millions of citizens',
        color: '#0d47a1'
    },
    {
        industry: 'E-Commerce',
        logo: 'https://logo.clearbit.com/tokopedia.com',
        company: 'Tokopedia',
        quote: 'Simplified merchant verification and contract management at scale',
        color: '#2e7d32'
    },
    {
        industry: 'Healthcare',
        logo: 'https://logo.clearbit.com/halodoc.com',
        company: 'Halodoc',
        quote: 'Secured patient consent forms with digital signatures for telehealth services',
        color: '#e53935'
    },
    {
        industry: 'Logistics',
        logo: 'https://logo.clearbit.com/jne.co.id',
        company: 'JNE Express',
        quote: 'Streamlined shipping document verification across 6,000+ outlets nationwide',
        color: '#ff6f00'
    }
];

const isPaused = ref(false);

const pauseAnimation = () => {
    isPaused.value = true;
};

const resumeAnimation = () => {
    isPaused.value = false;
};
</script>

<template>
    <section class="stories-section">
        <div class="container">
            <!-- Header -->
            <div class="stories-header">
                <div class="header-content">
                    <h2 class="section-title">
                        From startups to enterprises,<br>
                        Privy scales with teams of any size.
                    </h2>
                </div>
                <div class="header-actions">
                    <a href="#" class="view-all">
                        Explore customer stories <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Stories Marquee -->
        <div class="marquee-wrapper" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
            <div class="marquee" :class="{ paused: isPaused }">
                <div class="marquee-content">
                    <div class="story-card" 
                         v-for="story in stories" 
                         :key="story.company"
                         :style="{ '--accent-color': story.color }">
                        <div class="card-header">
                            <span class="industry-tag">{{ story.industry }}</span>
                        </div>
                        <div class="card-body">
                            <img :src="story.logo" :alt="story.company" class="company-logo">
                            <p class="quote">{{ story.quote }}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="read-more">
                                Read customer story <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Duplicate for seamless loop -->
                <div class="marquee-content" aria-hidden="true">
                    <div class="story-card" 
                         v-for="story in stories" 
                         :key="story.company + '-dup'"
                         :style="{ '--accent-color': story.color }">
                        <div class="card-header">
                            <span class="industry-tag">{{ story.industry }}</span>
                        </div>
                        <div class="card-body">
                            <img :src="story.logo" :alt="story.company" class="company-logo">
                            <p class="quote">{{ story.quote }}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="read-more">
                                Read customer story <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <!-- View Solutions Link -->
            <div class="solutions-link">
                <a href="#">View all solutions <i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.stories-section {
    background: var(--theme-bg-primary);
    padding: 120px 0;
    overflow: hidden;
    transition: background 0.3s ease;
}

/* Header */
.stories-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 48px;
}

.section-title {
    font-size: 40px;
    font-weight: 800;
    color: var(--theme-text-primary);
    line-height: 1.3;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 24px;
}

.view-all {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-red);
    font-weight: 600;
    transition: all 0.3s ease;
}

.view-all:hover {
    gap: 12px;
}

/* Marquee */
.marquee-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 5%,
        black 95%,
        transparent 100%
    );
    -webkit-mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 5%,
        black 95%,
        transparent 100%
    );
    padding: 20px 0;
}

.marquee {
    display: flex;
    width: max-content;
    animation: scroll 30s linear infinite;
}

.marquee.paused {
    animation-play-state: paused;
}

.marquee-content {
    display: flex;
    gap: 24px;
    padding-right: 24px;
    flex-shrink: 0;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

/* Story Card */
.story-card {
    flex: 0 0 350px;
    min-width: 350px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 28px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.story-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(225, 32, 38, 0.1), transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.story-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--primary-red);
    transform: translateY(-4px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(225, 32, 38, 0.15);
}

.story-card:hover::before {
    opacity: 1;
}

.card-header {
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
}

.industry-tag {
    display: inline-block;
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    color: var(--theme-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
}

.story-card:hover .industry-tag {
    background: var(--primary-red);
    color: var(--theme-text-primary);
    box-shadow: 0 5px 15px rgba(225, 32, 38, 0.3);
}

.card-body {
    flex: 1;
    position: relative;
    z-index: 1;
}

.company-logo {
    width: 80px;
    height: 40px;
    object-fit: contain;
    background: #fff;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
}

.story-card:hover .company-logo {
    transform: scale(1.05);
}

.quote {
    font-size: 18px;
    font-weight: 500;
    color: var(--theme-text-primary);
    line-height: 1.5;
}

.card-footer {
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 1;
}

.read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-red);
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.read-more:hover {
    gap: 12px;
    text-shadow: 0 0 10px rgba(225, 32, 38, 0.5);
}

/* Solutions Link */
.solutions-link {
    margin-top: 48px;
    text-align: center;
}

.solutions-link a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--theme-text-secondary);
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.solutions-link a:hover {
    color: var(--theme-text-primary);
}

/* Responsive */
@media (max-width: 768px) {
    .stories-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    }
    
    .section-title {
        font-size: 28px;
    }
    
    .story-card {
        flex: 0 0 300px;
        min-width: 300px;
    }
    
    .marquee {
        animation-duration: 25s;
    }
}
</style>
