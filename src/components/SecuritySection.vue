<script setup>
import { ref } from 'vue';

const securityFeatures = [
    {
        id: 'identity',
        icon: 'fas fa-id-card',
        title: 'PrivyIdentity',
        description: 'Real-time identity verification with AI-powered facial recognition and liveness detection.',
        link: 'Learn about Identity Verification'
    },
    {
        id: 'eseal',
        icon: 'fas fa-stamp',
        title: 'e-Seal & e-Meterai',
        description: 'Official electronic seals and digital stamps. Legal and compliant with Indonesian regulations.',
        link: 'Learn about e-Seal'
    },
    {
        id: 'encryption',
        icon: 'fas fa-lock',
        title: 'End-to-End Encryption',
        description: 'All documents are encrypted in transit and at rest. Your data stays protected at all times.',
        link: 'Learn about Encryption'
    }
];

const stats = [
    { value: '70%', label: 'Faster Identity Verification' },
    { value: '8.3M', label: 'Fraud Attempts Blocked' }
];
</script>

<template>
    <section class="security-section">
        <div class="container">
            <!-- Section Header -->
            <div class="security-header">
                <span class="section-label">Security</span>
                <h2 class="section-title">
                    Enterprise-Grade Security<br>
                    <span class="highlight">Where Trust is Built-In</span>
                </h2>
                <p class="section-subtitle">
                    Use AI-powered verification to secure identities and protect documents 
                    so your team can focus on what matters.
                </p>
            </div>
            
            <!-- Main Feature Card -->
            <div class="main-feature-card">
                <div class="feature-badge">
                    <i class="fas fa-shield-alt"></i>
                    <span>ISO 27001 Certified</span>
                </div>
                <h3>Verify identities in seconds.</h3>
                <p>Stop fraud before it happens with AI-powered identity verification and biometric authentication.</p>
                <a href="#" class="feature-cta">
                    Explore PrivyIdentity <i class="fas fa-arrow-right"></i>
                </a>
                
                <!-- Stats Row -->
                <div class="stats-row">
                    <div class="stat-item" v-for="stat in stats" :key="stat.label">
                        <span class="stat-value">{{ stat.value }}</span>
                        <span class="stat-label">{{ stat.label }}</span>
                    </div>
                </div>
            </div>
            
            <!-- Feature Cards Grid -->
            <div class="security-grid">
                <div class="security-card" v-for="feature in securityFeatures" :key="feature.id">
                    <div class="card-icon">
                        <i :class="feature.icon"></i>
                    </div>
                    <h4>{{ feature.title }}</h4>
                    <p>{{ feature.description }}</p>
                    <a href="#" class="card-link">
                        {{ feature.link }} <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Background Elements -->
        <div class="bg-elements">
            <div class="glow-orb orb-1"></div>
            <div class="glow-orb orb-2"></div>
        </div>
    </section>
</template>

<style scoped>
.security-section {
    position: relative;
    background: linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%);
    padding: 120px 0;
    overflow: hidden;
}

.container {
    position: relative;
    z-index: 1;
}

/* Header */
.security-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-label {
    display: inline-block;
    background: rgba(56, 161, 105, 0.1);
    color: #38A169;
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
    color: #fff;
    margin-bottom: 16px;
    line-height: 1.2;
}

.highlight {
    color: var(--primary-red);
}

.section-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Main Feature Card */
.main-feature-card {
    background: linear-gradient(135deg, rgba(225, 32, 38, 0.1) 0%, rgba(56, 161, 105, 0.05) 100%);
    border: 1px solid rgba(225, 32, 38, 0.2);
    border-radius: 24px;
    padding: 60px;
    margin-bottom: 40px;
    text-align: center;
}

.feature-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(56, 161, 105, 0.15);
    color: #38A169;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 24px;
}

.main-feature-card h3 {
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
}

.main-feature-card > p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto 32px;
    line-height: 1.6;
}

.feature-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-red);
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.feature-cta:hover {
    gap: 12px;
}

/* Stats Row */
.stats-row {
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-top: 48px;
    padding-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.stat-value {
    font-size: 48px;
    font-weight: 800;
    color: #38A169;
}

.stat-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
}

/* Security Grid */
.security-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.security-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 32px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.security-card::before {
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

.security-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: var(--primary-red);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(225, 32, 38, 0.1);
}

.security-card:hover::before {
    opacity: 1;
}

.card-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(225, 32, 38, 0.1);
    border-radius: 14px;
    color: var(--primary-red);
    font-size: 24px;
    margin-bottom: 20px;
    transition: all 0.4s ease;
}

.security-card:hover .card-icon {
    transform: scale(1.1) rotate(5deg);
    background: var(--primary-red);
    color: #fff;
    box-shadow: 0 10px 20px rgba(225, 32, 38, 0.3);
}

.security-card h4 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
}

.security-card p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
}

.card-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--primary-red);
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
}

.card-link:hover {
    gap: 10px;
    text-shadow: 0 0 10px rgba(225, 32, 38, 0.5);
}

/* Background Elements */
.bg-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.glow-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
}

.orb-1 {
    top: 15%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: rgba(225, 32, 38, 0.25);
}

.orb-2 {
    bottom: 5%;
    right: -5%;
    width: 600px;
    height: 600px;
    background: rgba(225, 32, 38, 0.12);
}

/* Responsive */
@media (max-width: 1024px) {
    .security-grid {
        grid-template-columns: 1fr;
    }
    
    .main-feature-card {
        padding: 40px 24px;
    }
    
    .stats-row {
        flex-direction: column;
        gap: 32px;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 32px;
    }
    
    .main-feature-card h3 {
        font-size: 28px;
    }
    
    .stat-value {
        font-size: 36px;
    }
}
</style>

