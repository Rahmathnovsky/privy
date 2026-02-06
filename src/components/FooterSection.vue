<template>
    <footer class="footer-wrapper">
        <!-- 3D Floating Contact Card -->
        <div class="floating-card-wrapper">
            <div class="floating-card">
                <div class="card-content">
                    <div class="card-text">
                        <h3>Get in touch <span class="highlight">Privy.</span></h3>
                        <p>Reach out to us for any inquiries or assistance.</p>
                    </div>
                    <a href="#" class="contact-btn">
                        Contact Sales
                    </a>
                </div>
                <div class="card-glow"></div>
            </div>
        </div>
        
        <!-- Main Footer -->
        <div class="footer-main">
            <div class="container">
                <div class="footer-grid">
                    <!-- Company Info -->
                    <div class="footer-col company-info">
                        <div class="footer-logo-wrapper">
                            <span class="logo-icon">❤</span>
                            <span class="logo-text">Privy</span>
                        </div>
                        <div class="company-details">
                            <h5>PT Privy Identitas Digital</h5>
                            <p>Cibis Nine Tower 9, Lt. 8. Jl. Raya Cilandak KKO No.2, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560</p>
                            <a href="mailto:helpdesk@privy.id" class="email-link">helpdesk@privy.id</a>
                        </div>
                        <div class="social-links">
                            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        </div>
                        <a href="#" class="australia-link">
                            <i class="fas fa-globe"></i> Privy is also available in Australia
                        </a>
                    </div>
                    
                    <!-- Product -->
                    <div class="footer-col">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Personal Plan</a></li>
                            <li><a href="#">Enterprise Plan</a></li>
                            <li><a href="#">Online Identity Verification</a></li>
                            <li><a href="#">On Premise</a></li>
                            <li><a href="#">Digital Signature API</a></li>
                            <li><a href="#">Privy Digital Identity (SSO)</a></li>
                            <li><a href="#">White Paper</a></li>
                        </ul>
                    </div>
                    
                    <!-- Use Case -->
                    <div class="footer-col">
                        <h4>Use Case</h4>
                        <ul>
                            <li><a href="#">Fintech</a></li>
                            <li><a href="#">Banking</a></li>
                            <li><a href="#">Insurance</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Health Care</a></li>
                            <li><a href="#">Industrial, Mining, & Energy</a></li>
                            <li><a href="#">Human Resources</a></li>
                            <li><a href="#">Multifinance</a></li>
                        </ul>
                    </div>
                    
                    <!-- Company -->
                    <div class="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Notice</a></li>
                            <li><a href="#">Subscriber Agreement</a></li>
                            <li><a href="#">Warranty Policy</a></li>
                            <li><a href="#">Article</a></li>
                            <li><a href="#">Brochure</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- App Store Links -->
                <div class="app-store-links">
                    <a href="#" class="store-badge">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play">
                    </a>
                    <a href="#" class="store-badge">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store">
                    </a>
                </div>
                
                <!-- Footer Bottom -->
                <div class="footer-bottom">
                    <span class="copyright">© Copyright 2025 PT Privy Identitas Digital — All Right reserved.</span>
                </div>
            </div>
        </div>
        
        <!-- Background glow -->
        <div class="footer-bg-glow"></div>
    </footer>
</template>

<style scoped>
.footer-wrapper {
    position: relative;
    background: var(--theme-bg-primary);
    overflow: hidden;
    transition: background 0.3s ease;
}

/* 3D Floating Card */
.floating-card-wrapper {
    position: relative;
    padding: 60px 24px;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 10;
}

.floating-card {
    position: relative;
    background: var(--theme-bg-card);
    border: 1px solid var(--theme-glow-red);
    border-radius: 20px;
    padding: 40px 60px;
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.2),
        0 0 0 1px var(--theme-glow-red),
        inset 0 1px 0 var(--theme-border);
    transform: perspective(1000px) rotateX(2deg);
    transition: all 0.4s ease;
}

.floating-card:hover {
    transform: perspective(1000px) rotateX(0deg) translateY(-5px);
    box-shadow: 
        0 35px 70px rgba(0, 0, 0, 0.3),
        0 0 60px var(--theme-glow-red),
        inset 0 1px 0 var(--theme-border-hover);
}

.card-glow {
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    background: radial-gradient(ellipse, rgba(225, 32, 38, 0.2) 0%, transparent 60%);
    pointer-events: none;
    filter: blur(40px);
}

.card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
}

.card-text h3 {
    font-size: 28px;
    font-weight: 700;
    color: var(--theme-text-primary);
    margin-bottom: 8px;
}

.card-text .highlight {
    color: var(--theme-red-contrast);
}

.card-text p {
    color: var(--theme-text-secondary);
    font-size: 16px;
}

.contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    background: var(--primary-red);
    color: #fff;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(225, 32, 38, 0.4);
}

.contact-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(225, 32, 38, 0.5);
}

/* Main Footer */
.footer-main {
    position: relative;
    padding: 80px 0 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 5;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 60px;
    margin-bottom: 60px;
}

/* Company Info Column */
.company-info {
    max-width: 350px;
}

.footer-logo-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
}

.logo-icon {
    color: var(--theme-red-contrast);
    font-size: 24px;
}

.logo-text {
    font-size: 28px;
    font-weight: 700;
    color: var(--theme-red-contrast);
}

.company-details h5 {
    font-size: 16px;
    font-weight: 600;
    color: var(--theme-text-primary);
    margin-bottom: 12px;
}

.company-details p {
    font-size: 13px;
    color: var(--theme-text-muted);
    line-height: 1.6;
    margin-bottom: 12px;
}

.email-link {
    color: var(--theme-text-secondary);
    font-size: 14px;
    transition: color 0.2s ease;
}

.email-link:hover {
    color: var(--primary-red);
}

.social-links {
    display: flex;
    gap: 12px;
    margin: 24px 0;
}

.social-links a {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: var(--theme-text-secondary);
    transition: all 0.2s ease;
}

.social-links a:hover {
    background: var(--primary-red);
    border-color: var(--primary-red);
    color: var(--theme-text-primary);
    transform: translateY(-2px);
}

.australia-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-red);
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.australia-link:hover {
    text-decoration: underline;
}

/* Footer Columns */
.footer-col h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--theme-text-primary);
    margin-bottom: 20px;
}

.footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-col li {
    margin-bottom: 12px;
}

.footer-col a {
    color: var(--theme-text-muted);
    font-size: 14px;
    transition: all 0.2s ease;
}

.footer-col a:hover {
    color: var(--primary-red);
}

/* App Store Links */
.app-store-links {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
}

.store-badge img {
    height: 40px;
    width: auto;
    transition: transform 0.2s ease;
}

.store-badge:hover img {
    transform: scale(1.05);
}

/* Footer Bottom */
.footer-bottom {
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
}

.copyright {
    color: var(--theme-text-muted);
    font-size: 13px;
}

/* Background Glow */
.footer-bg-glow {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(225, 32, 38, 0.08) 0%, transparent 60%);
    pointer-events: none;
}

/* Responsive */
@media (max-width: 1024px) {
    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
    
    .company-info {
        grid-column: span 2;
        max-width: 100%;
    }
    
    .card-content {
        flex-direction: column;
        text-align: center;
        gap: 24px;
    }
}

@media (max-width: 768px) {
    .floating-card {
        padding: 30px;
    }
    
    .card-text h3 {
        font-size: 22px;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    
    .company-info {
        grid-column: span 1;
    }
    
    .app-store-links {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .footer-bottom {
        text-align: center;
    }
}
</style>
