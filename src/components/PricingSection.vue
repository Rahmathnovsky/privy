<script setup>
import { ref, onMounted } from 'vue';
import { useScrollAnimations } from '../composables/useScrollAnimations';

const { fadeIn, staggerIn } = useScrollAnimations();

const isYearly = ref(false);

const toggleBilling = () => {
    isYearly.value = !isYearly.value;
};

const plans = [
    {
        name: "Free Plan",
        price: { monthly: 0, yearly: 0 },
        description: "For individuals to organize personal projects and documents",
        btnText: "Register Now",
        isPopular: false,
        isCustom: false,
        features: [
            { text: "Web & Mobile App Access", included: true },
            { text: "Digital Signature (10 docs/month, upload unavailable)", included: true },
            { text: "E-Meterai", included: false },
            { text: "Bulk Sign", included: false },
            { text: "Company E-Seal & E-Stamp", included: false },
        ]
    },
    {
        name: "Personal Plan",
        price: { monthly: 54000, yearly: 395000 },
        description: "For professional individuals to work together",
        btnText: "Buy Now",
        isPopular: true,
        isCustom: false,
        features: [
            { text: "All Features in Free Plan Included", isHeader: true },
            { text: "Web & Mobile App Access", included: true },
            { text: "Digital Signature (Unlimited)", included: true },
            { text: "E-Meterai", included: true },
            { text: "Bulk Sign", included: false },
            { text: "Company E-Seal & E-Stamp", included: false },
        ]
    },
    {
        name: "Enterprise Plan",
        price: { monthly: 175000, yearly: 2100000 },
        description: "For growing business to operate with control and security",
        btnText: "Buy Now",
        isPopular: false,
        isCustom: false,
        features: [
            { text: "All Features in Free Plan included", isHeader: true },
            { text: "Web & Mobile App Access", included: true },
            { text: "Digital Signature (Unlimited)", included: true },
            { text: "E-Meterai", included: true },
            { text: "Company E-Seal & E-Stamp", included: true },
        ]
    },
    {
        name: "Custom Plan",
        isCustom: true,
        description: "Speak with our team to enable Privy Services to your business needs",
        btnText: "Contact Sales",
        features: []
    }
];

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
};

onMounted(() => {
    // Fade in pricing header
    const header = document.querySelector('.pricing-section .pricing-header');
    if (header) {
        fadeIn(header, { y: 40 });
    }

    // Stagger pricing cards
    const cards = document.querySelectorAll('.pricing-card');
    if (cards.length) {
        staggerIn(cards, { y: 60, stagger: 0.1 });
    }
});
</script>

<template>
    <section class="pricing-section">
        <div class="container">
            <div class="pricing-header">
                <div class="pill-label">COMPARISON FEATURE</div>
                <h2><span class="text-highlight">Every Great Achievement</span> Starts With The Right Plan</h2>
                <p>Find the Perfect Plan for All Your Needs.</p>
                
                <div class="billing-toggle">
                    <button :class="{ active: !isYearly }" @click="isYearly = false">Monthly</button>
                    <button :class="{ active: isYearly }" @click="isYearly = true">Yearly</button>
                    <div class="save-badge">▶ Save 39%</div>
                </div>
            </div>

            <div class="pricing-grid">
                <div v-for="(plan, index) in plans" :key="index" 
                     class="pricing-card" 
                     :class="{ 'popular': plan.isPopular, 'custom': plan.isCustom }">
                    
                    <div v-if="plan.isPopular" class="popular-tag">PERFECT FOR PERSONAL</div>

                    <div v-if="plan.isCustom">
                        <div class="custom-header">Have a Special Requirement?</div>
                    </div>

                    <h3 class="plan-name" :class="{'custom-title': plan.isCustom}">{{ plan.name }}</h3>

                    <div v-if="!plan.isCustom" class="price-box">
                        <span class="currency">IDR</span>
                        <span class="amount">{{ formatPrice(isYearly ? plan.price.yearly : plan.price.monthly) }}</span>
                        <span class="period">/{{ isYearly ? 'Year' : 'Month' }}</span>
                    </div>

                    <p class="plan-desc">{{ plan.description }}</p>

                    <button class="plan-btn" :class="{ 'btn-white': plan.isPopular, 'btn-red-outline': !plan.isPopular && !plan.isCustom, 'btn-red-light': plan.isCustom }">
                        {{ plan.btnText }}
                    </button>

                    <div class="features-list" v-if="!plan.isCustom">
                        <div v-for="(feature, fIndex) in plan.features" :key="fIndex" class="feature-item">
                            <div v-if="feature.isHeader" class="feature-header">
                                {{ feature.text }}
                            </div>
                            <div v-else class="feature-row">
                                <i v-if="feature.included" class="check-icon">✔</i>
                                <i v-else class="cross-icon">✕</i>
                                <span :class="{ 'strike': !feature.included }">{{ feature.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pricing-section {
    padding: 100px 0;
    background-color: var(--theme-bg-primary);
    transition: background-color 0.3s ease;
}

.pricing-header {
    text-align: center;
    margin-bottom: 60px;
}

.pill-label {
    display: inline-block;
    background-color: var(--theme-glow-red);
    color: var(--primary-red);
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.pricing-header h2 {
    font-size: 36px;
    font-weight: 800;
    color: var(--theme-text-primary);
    margin-bottom: 10px;
}

.pricing-header p {
    font-size: 18px;
    color: var(--theme-text-secondary);
    margin-bottom: 30px;
}

.billing-toggle {
    display: inline-flex;
    background: var(--theme-bg-tertiary);
    padding: 4px;
    border-radius: 30px;
    position: relative;
}

.billing-toggle button {
    padding: 10px 24px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 14px;
    color: var(--theme-text-secondary);
    background: transparent;
    transition: all 0.3s;
}

.billing-toggle button.active {
    background: var(--primary-red);
    color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.save-badge {
    position: absolute;
    right: -90px;
    top: 50%;
    transform: translateY(-50%);
    background: #EE6C6C;
    color: white;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    align-items: stretch;
}

.pricing-card {
    background: var(--theme-bg-secondary);
    border: 1px solid var(--theme-border);
    border-radius: 16px;
    padding: 30px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
}

.pricing-card.popular {
    background: #B91319;
    border-color: #B91319;
    color: white;
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

.pricing-card.custom {
    background: var(--theme-glow-red);
    border: 1px solid rgba(225, 32, 38, 0.2);
}

.popular-tag {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 6px 12px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    letter-spacing: 0.5px;
}

.plan-name {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #E12026; /* Primary red for titles */
}

.pricing-card.popular .plan-name {
    color: white;
}

.custom-title {
    color: #E12026;
    font-size: 22px;
}

.custom-header {
    font-size: 14px;
    color: var(--theme-text-secondary);
    margin-bottom: 5px;
    font-weight: 600;
}

.price-box {
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
}

.currency {
    font-size: 16px;
    font-weight: 600;
    margin-right: 4px;
    color: var(--theme-text-primary);
}

.amount {
    font-size: 32px;
    font-weight: 800;
    color: var(--theme-text-primary);
}

.period {
    font-size: 14px;
    color: var(--theme-text-muted);
    margin-left: 4px;
}

.pricing-card.popular .currency,
.pricing-card.popular .amount,
.pricing-card.popular .period {
    color: white;
}

.plan-desc {
    font-size: 14px;
    color: var(--theme-text-secondary);
    margin-bottom: 30px;
    line-height: 1.5;
    min-height: 42px;
}

.pricing-card.popular .plan-desc {
    color: rgba(255, 255, 255, 0.9);
}

.plan-btn {
    width: 100%;
    padding: 12px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 30px;
    transition: all 0.2s;
}

.btn-red-outline {
    background: #FFEBEB;
    color: #E12026;
    border: none;
}

.btn-red-outline:hover {
    background: #FECACA;
}

.btn-white {
    background: white;
    color: #E12026;
    border: none;
}

.btn-white:hover {
    background: #F7FAFC;
    transform: translateY(-2px);
}

.btn-red-light {
    background: #FED7D7;
    color: #C53030;
    border: none;
}

.btn-red-light:hover {
    background: #FEB2B2;
}

.features-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
}

.feature-header {
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 5px;
    color: inherit;
}

.feature-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: var(--theme-text-secondary);
}

.pricing-card.popular .feature-row {
    color: white;
}

.check-icon {
    color: #38A169;
    font-style: normal;
    font-weight: bold;
}

.cross-icon {
    color: #E53E3E;
    font-style: normal;
    font-weight: bold;
}

.pricing-card.popular .check-icon,
.pricing-card.popular .cross-icon {
    color: white;
}

.strike {
    text-decoration: none;
    color: var(--theme-text-muted);
}

.pricing-card.popular .strike {
    color: rgba(255,255,255,0.7);
}

/* Responsive */
@media (max-width: 1024px) {
    .pricing-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .pricing-grid {
        grid-template-columns: 1fr;
    }
    .pricing-card.popular {
        transform: scale(1);
    }
}
</style>
