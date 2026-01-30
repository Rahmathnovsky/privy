<template>
    <section class="cta-section">
        <div class="container">
            <div class="cta-content">
                <h2>Millions of Users and Businesses<br>Call Privy Home</h2>
                <p>
                    Whether you're securing personal documents or managing enterprise-wide digital identity, 
                    Privy is where trust is built. Join the platform that powers digital trust across Indonesia.
                </p>
                <div class="cta-actions">
                    <a href="#" class="btn btn-cta-primary">
                        Start Free Trial
                        <i class="fas fa-arrow-right"></i>
                    </a>
                    <a href="#" class="btn btn-cta-secondary">
                        Contact Sales
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Background -->
        <div class="cta-bg">
            <div class="glow"></div>
        </div>
    </section>
</template>

<style scoped>
.cta-section {
    position: relative;
    background: linear-gradient(180deg, #0d0d0d 0%, #1a0808 50%, #0d0d0d 100%);
    padding: 160px 0;
    overflow: hidden;
}

.cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.cta-content h2 {
    font-size: 52px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 24px;
    line-height: 1.2;
}

.cta-content p {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 48px;
}

.cta-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 36px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-cta-primary {
    background: var(--primary-red);
    color: #fff;
    box-shadow: 0 4px 30px rgba(225, 32, 38, 0.4);
}

.btn-cta-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 40px rgba(225, 32, 38, 0.5);
}

.btn-cta-primary i {
    transition: transform 0.3s ease;
}

.btn-cta-primary:hover i {
    transform: translateX(4px);
}

.btn-cta-secondary {
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-cta-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
}

/* Background */
.cta-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 1000px;
    background: radial-gradient(circle, rgba(225, 32, 38, 0.35) 0%, rgba(225, 32, 38, 0.15) 30%, transparent 60%);
    animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
}

/* Responsive */
@media (max-width: 768px) {
    .cta-section {
        padding: 100px 0;
    }
    
    .cta-content h2 {
        font-size: 32px;
    }
    
    .cta-content p {
        font-size: 16px;
    }
    
    .cta-actions {
        flex-direction: column;
        padding: 0 20px;
    }
    
    .btn {
        justify-content: center;
    }
}
</style>

