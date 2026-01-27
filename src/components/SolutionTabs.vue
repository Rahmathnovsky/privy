<script setup>
import { ref } from 'vue';

const activeTab = ref('personal');

const setTab = (tab) => {
    activeTab.value = tab;
};
</script>

<template>
    <section class="solutions-section" id="solusi">
        <div class="container">
            <div class="section-header reveal">
                <h2>Privy for YOU: Personal or Business, We've Got You Covered</h2>
                <p>Whether you're signing documents for yourself or managing transactions for your business, Privy
                    offers secure, seamless solutions for digital signatures, identity verification, and more.</p>
            </div>
            <div class="tabs-nav reveal">
                <div class="tab-btn" :class="{ active: activeTab === 'personal' }" @click="setTab('personal')">Personal Plan</div>
                <div class="tab-btn" :class="{ active: activeTab === 'business' }" @click="setTab('business')">Business Plan</div>
            </div>
            
            <div class="tab-content" :class="{ active: activeTab === 'personal' }">
                <div class="bento-card reveal">
                    <div class="bento-header">
                        <h3>Personal Plan</h3>
                        <p>Unlimited signing, secure storage, and verified identity register free on the app and
                            subscribe monthly or yearly.</p>
                    </div>
                    <div class="bento-body">
                        <div class="bento-image"></div>
                        <div class="bento-details">
                            <div class="detail-item">
                                <h4>Unlimited digital signature</h4>
                                <p>Unlock unlimited self-signing, request signatures from others, and sign documents
                                    from others.</p>
                            </div>
                            <div class="detail-item">
                                <h4>Upload all types of docs.</h4>
                                <p>Upload letters, invoices, or even official agreements. Sign it by yourself or request
                                    signatures from others.</p>
                            </div>
                            <div class="detail-item">
                                <h4>10 GB document storage</h4>
                                <p>Store and never lose track of all of your important documents in one application.</p>
                            </div>
                            <div class="store-badges">
                                <a href="#" class="store-btn">
                                    <i class="fab fa-google-play"></i>
                                    <div class="store-text">
                                        <span>GET IT ON</span>
                                        <strong>Google Play</strong>
                                    </div>
                                </a>
                                <a href="#" class="store-btn">
                                    <i class="fab fa-apple"></i>
                                    <div class="store-text">
                                        <span>Download on the</span>
                                        <strong>App Store</strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content" :class="{ active: activeTab === 'business' }">
                <div class="bento-card business-style reveal">
                    <div class="bento-header">
                        <h3>Business Plan</h3>
                        <p>Complete digital document management, e-Seal, and API integration for your enterprise
                            efficiency.</p>
                    </div>
                    <div class="bento-body">
                        <div class="bento-image"
                            style="background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');">
                        </div>
                        <div class="bento-details">
                            <div class="detail-item">
                                <h4>Enterprise Document Management</h4>
                                <p>Centralized dashboard for managing thousands of documents with role-based access
                                    control.</p>
                            </div>
                            <div class="detail-item">
                                <h4>Seamless API Integration</h4>
                                <p>Connect Privy directly to your existing systems (ERP, CRM, HRIS) with our robust API.
                                </p>
                            </div>
                            <div class="detail-item">
                                <h4>e-Seal Support</h4>
                                <p>Official distributor of electronic seals. Stamp your documents legally without hassle.</p>
                            </div>
                            <div style="margin-top: 30px;">
                                <button class="btn btn-primary" style="background: white; color: #1A202C;">Contact
                                    Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
