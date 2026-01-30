<template>
    <footer>
        <!-- Newsletter Section -->
        <div class="footer-newsletter">
            <div class="container">
                <div class="newsletter-content">
                    <div class="newsletter-text">
                        <h3>Subscribe to our newsletter</h3>
                        <p>Get tips, product updates, and industry insights. Twice a month.</p>
                    </div>
                    <form class="newsletter-form" @submit.prevent>
                        <input type="email" placeholder="Enter your email" required>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        
        <!-- Main Footer -->
        <div class="footer-main">
            <div class="container">
                <div class="footer-grid">
                    <!-- Platform -->
                    <div class="footer-col">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">PrivySign</a></li>
                            <li><a href="#">PrivyIdentity</a></li>
                            <li><a href="#">e-Seal</a></li>
                            <li><a href="#">Enterprise</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    
                    <!-- Ecosystem -->
                    <div class="footer-col">
                        <h4>Ecosystem</h4>
                        <ul>
                            <li><a href="#">API Documentation</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Mobile App</a></li>
                            <li><a href="#">Integrations</a></li>
                        </ul>
                    </div>
                    
                    <!-- Support -->
                    <div class="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">System Status</a></li>
                            <li><a href="#">Trust Center</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    
                    <!-- Company -->
                    <div class="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Customer Stories</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- Footer Bottom -->
                <div class="footer-bottom">
                    <div class="footer-brand">
                        <img src="/privy-logo.png" alt="Privy" class="footer-logo">
                        <span class="copyright">© 2024 Privy. All rights reserved.</span>
                    </div>
                    <div class="footer-links">
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookies</a>
                    </div>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: #0a0a0a;
}

/* Newsletter */
.footer-newsletter {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 60px 0;
}

.newsletter-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.newsletter-text h3 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
}

.newsletter-text p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
}

.newsletter-form {
    display: flex;
    gap: 12px;
}

.newsletter-form input {
    padding: 14px 20px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    min-width: 280px;
    outline: none;
    transition: all 0.2s ease;
}

.newsletter-form input:focus {
    border-color: var(--primary-red);
    background: rgba(255, 255, 255, 0.12);
}

.newsletter-form input::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.newsletter-form button {
    padding: 14px 28px;
    background: var(--primary-red);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.newsletter-form button:hover {
    background: var(--primary-dark);
}

/* Main Footer */
.footer-main {
    padding: 80px 0 40px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    margin-bottom: 60px;
}

.footer-col h4 {
    font-size: 13px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
    color: rgba(255, 255, 255, 0.55);
    font-size: 14px;
    transition: color 0.2s ease;
}

.footer-col a:hover {
    color: #fff;
}

/* Footer Bottom */
.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 20px;
}

.footer-logo {
    height: 28px;
    width: auto;
    filter: brightness(0) invert(1);
}

.copyright {
    color: rgba(255, 255, 255, 0.4);
    font-size: 13px;
}

.footer-links {
    display: flex;
    gap: 24px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: #fff;
}

.social-links {
    display: flex;
    gap: 16px;
}

.social-links a {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;
}

.social-links a:hover {
    background: var(--primary-red);
    color: #fff;
}

/* Responsive */
@media (max-width: 1024px) {
    .newsletter-content {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    
    .footer-bottom {
        flex-direction: column;
        gap: 24px;
        text-align: center;
    }
    
    .footer-brand {
        flex-direction: column;
    }
    
    .newsletter-form {
        flex-direction: column;
        width: 100%;
    }
    
    .newsletter-form input {
        min-width: 100%;
    }
}
</style>

