<script setup>
import { ref } from 'vue';

const activeFeature = ref('privysign');

const features = [
    {
        id: 'privysign',
        icon: 'fas fa-signature',
        title: 'PrivySign',
        subtitle: 'Sign documents with legal validity',
        description: 'Create legally binding digital signatures anywhere, anytime. PrivySign is certified by Indonesia\'s Ministry of Communication and recognized globally.',
        stats: { label: 'Documents Signed Monthly', value: '5M+' },
        link: { text: 'Explore PrivySign', url: '#' }
    },
    {
        id: 'workflow',
        icon: 'fas fa-project-diagram',
        title: 'Workflow Automation',
        subtitle: 'Automate document routing',
        description: 'Set up automated approval workflows, notifications, and document routing. Reduce manual processes and accelerate business operations.',
        stats: { label: 'Time Saved on Average', value: '75%' },
        link: { text: 'Explore Automation', url: '#' }
    },
    {
        id: 'cloud',
        icon: 'fas fa-cloud',
        title: 'Cloud Access',
        subtitle: 'Documents anywhere, anytime',
        description: 'Access, sign, and manage your documents from any device. Secure cloud storage with 99.9% uptime guarantee.',
        stats: { label: 'Cloud Uptime', value: '99.9%' },
        link: { text: 'Explore Cloud Storage', url: '#' }
    },
    {
        id: 'mobile',
        icon: 'fas fa-mobile-alt',
        title: 'Privy Mobile',
        subtitle: 'Full power in your pocket',
        description: 'Complete document signing and identity verification on iOS and Android. Biometric authentication for maximum security.',
        stats: { label: 'App Store Rating', value: '4.8★' },
        link: { text: 'Download Mobile App', url: '#' }
    },
    {
        id: 'api',
        icon: 'fas fa-plug',
        title: 'API Integration',
        subtitle: 'Connect with your systems',
        description: 'Integrate Privy into your existing applications with our comprehensive REST API. SDKs available for all major platforms.',
        stats: { label: 'API Uptime', value: '99.99%' },
        link: { text: 'Explore API Docs', url: '#' }
    }
];

const setActiveFeature = (id) => {
    activeFeature.value = id;
};

const getActiveFeature = () => {
    return features.find(f => f.id === activeFeature.value);
};
</script>

<template>
    <section class="workflow-section">
        <div class="section-header-container">
            <div class="container">
                <span class="section-label">Privy Platform</span>
                <h2 class="section-title">Accelerate Your Digital Workflow</h2>
                <p class="section-subtitle">
                    From your first signature to enterprise-wide deployment, 
                    Privy provides tools to help you work faster and more securely.
                </p>
            </div>
        </div>
        
        <div class="features-layout">
            <div class="container features-grid">
                <!-- Sidebar Navigation -->
                <div class="features-nav">
                    <button v-for="feature in features" 
                            :key="feature.id"
                            class="feature-nav-item"
                            :class="{ active: activeFeature === feature.id }"
                            @click="setActiveFeature(feature.id)">
                        <div class="nav-icon">
                            <i :class="feature.icon"></i>
                        </div>
                        <div class="nav-text">
                            <strong>{{ feature.title }}</strong>
                            <span>{{ feature.subtitle }}</span>
                        </div>
                        <i class="fas fa-chevron-right nav-arrow"></i>
                    </button>
                </div>
                
                <!-- Feature Content -->
                <div class="feature-content">
                    <div class="feature-display" v-if="getActiveFeature()">
                        <div class="feature-icon-large">
                            <i :class="getActiveFeature().icon"></i>
                        </div>
                        <h3>{{ getActiveFeature().title }}</h3>
                        <p>{{ getActiveFeature().description }}</p>
                        
                        <div class="feature-stat">
                            <span class="stat-value">{{ getActiveFeature().stats.value }}</span>
                            <span class="stat-label">{{ getActiveFeature().stats.label }}</span>
                        </div>
                        
                        <a :href="getActiveFeature().link.url" class="feature-link">
                            {{ getActiveFeature().link.text }}
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    
                    <!-- Visual Element -->
                    <div class="feature-visual">
                        <div class="visual-card">
                            <div class="card-header">
                                <div class="dots">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="code-line" v-for="n in 5" :key="n" :style="{ width: (Math.random() * 40 + 40) + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Customer Story Highlight -->
        <div class="customer-highlight">
            <div class="container">
                <div class="highlight-card">
                    <div class="highlight-content">
                        <img src="https://logo.clearbit.com/tokopedia.com" alt="Tokopedia" class="company-logo">
                        <blockquote>
                            "Privy helped us reduce document processing time by 80% and improved our customer onboarding experience."
                        </blockquote>
                        <cite>— Operations Team, Tokopedia</cite>
                    </div>
                    <a href="#" class="highlight-link">
                        Read customer story <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.workflow-section {
    background: var(--theme-bg-primary);
    padding: 120px 0;
    transition: background 0.3s ease;
}

.section-header-container {
    text-align: center;
    margin-bottom: 80px;
}

.section-label {
    display: inline-block;
    background: rgba(225, 32, 38, 0.1);
    color: var(--primary-red);
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.section-title {
    font-size: 48px;
    font-weight: 800;
    color: var(--theme-text-primary);
    margin-bottom: 16px;
    letter-spacing: -1px;
}

.section-subtitle {
    font-size: 18px;
    color: var(--theme-text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Features Layout */
.features-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 60px;
    align-items: start;
}

/* Sidebar Navigation */
.features-nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.feature-nav-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: left;
    position: relative;
    overflow: hidden;
}

.feature-nav-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--primary-red);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.feature-nav-item:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateX(8px);
}

.feature-nav-item.active {
    background: linear-gradient(90deg, rgba(225, 32, 38, 0.1) 0%, rgba(225, 32, 38, 0.02) 100%);
    border-color: var(--primary-red);
    box-shadow: 0 4px 20px rgba(225, 32, 38, 0.1);
}

.feature-nav-item.active::before {
    opacity: 1;
}

.nav-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    color: var(--theme-text-secondary);
    font-size: 20px;
    transition: all 0.3s ease;
}

.feature-nav-item:hover .nav-icon {
    background: rgba(225, 32, 38, 0.1);
    color: var(--primary-red);
    transform: scale(1.1);
}

.feature-nav-item.active .nav-icon {
    background: var(--primary-red);
    color: var(--theme-text-primary);
    box-shadow: 0 4px 12px rgba(225, 32, 38, 0.3);
}

.nav-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.nav-text strong {
    color: var(--theme-text-primary);
    font-size: 16px;
    font-weight: 600;
}

.nav-text span {
    color: var(--theme-text-muted);
    font-size: 13px;
    transition: color 0.3s ease;
}

.feature-nav-item.active .nav-text span {
    color: rgba(225, 32, 38, 0.8);
}

.nav-arrow {
    color: rgba(255, 255, 255, 0.3);
    font-size: 14px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateX(-10px);
}

.feature-nav-item:hover .nav-arrow {
    opacity: 0.5;
    transform: translateX(0);
}

.feature-nav-item.active .nav-arrow {
    opacity: 1;
    color: var(--primary-red);
    transform: translateX(0);
}

/* Feature Content */
.feature-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.feature-display {
    padding: 40px;
}

.feature-icon-large {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(225, 32, 38, 0.1);
    border-radius: 20px;
    color: var(--primary-red);
    font-size: 32px;
    margin-bottom: 24px;
}

.feature-display h3 {
    font-size: 32px;
    font-weight: 700;
    color: var(--theme-text-primary);
    margin-bottom: 16px;
}

.feature-display p {
    font-size: 16px;
    color: var(--theme-text-secondary);
    line-height: 1.7;
    margin-bottom: 32px;
}

.feature-stat {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 32px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
}

.stat-value {
    font-size: 36px;
    font-weight: 800;
    color: var(--primary-red);
}

.stat-label {
    font-size: 14px;
    color: var(--theme-text-muted);
}

.feature-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-red);
    font-weight: 600;
    transition: all 0.3s ease;
}

.feature-link:hover {
    gap: 12px;
}

/* Visual Card */
.feature-visual {
    display: flex;
    justify-content: center;
}

.visual-card {
    width: 100%;
    max-width: 400px;
    background: #1e1e1e;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.card-header {
    padding: 12px 16px;
    background: #2d2d2d;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dots {
    display: flex;
    gap: 6px;
}

.dots span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
}

.dots span:first-child { background: #ff5f57; }
.dots span:nth-child(2) { background: #ffbd2e; }
.dots span:nth-child(3) { background: #28ca42; }

.card-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.code-line {
    height: 12px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

/* Customer Highlight */
.customer-highlight {
    margin-top: 80px;
}

.highlight-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
}

.highlight-content {
    display: flex;
    align-items: center;
    gap: 24px;
}

.company-logo {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    object-fit: contain;
    background: #fff;
    padding: 10px;
}

blockquote {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    font-style: italic;
    max-width: 600px;
}

cite {
    font-size: 14px;
    color: var(--theme-text-muted);
    font-style: normal;
    margin-left: 24px;
}

.highlight-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-red);
    font-weight: 600;
    white-space: nowrap;
}

/* Responsive */
@media (max-width: 1024px) {
    .features-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .features-nav {
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: 16px;
    }
    
    .feature-nav-item {
        min-width: 200px;
    }
    
    .feature-content {
        grid-template-columns: 1fr;
    }
    
    .feature-visual {
        order: -1;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 32px;
    }
    
    .highlight-card {
        flex-direction: column;
        gap: 24px;
        text-align: center;
    }
    
    .highlight-content {
        flex-direction: column;
    }
}
</style>

