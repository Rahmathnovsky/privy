// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Scroll Animation Observer
const revealElements = document.querySelectorAll('.hero-content, .hero-image, .stat-item, .feature-card, .clients-header, .section-header, .cta-content, .pricing-card, .solution-card');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Tab Switcher Logic
function openTab(tabName) {
    // Hide all tabs
    const tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        // Reset animation
        tabs[i].style.opacity = '0';
        tabs[i].style.transform = 'translateY(20px)';
    }

    // Deactivate all buttons
    const btns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }

    // Show selected tab with animation delay
    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add("active");

    // Trigger reflow to restart transition
    void selectedTab.offsetWidth;

    selectedTab.style.opacity = '1';
    selectedTab.style.transform = 'translateY(0)';

    // Activate button (find button with onclick matching)
    const clickedBtn = Array.from(btns).find(btn => btn.getAttribute('onclick').includes(tabName));
    if (clickedBtn) clickedBtn.classList.add("active");
}

// Chat Widget Toggle
function toggleChat() {
    const chatWidget = document.getElementById('chatWidget');
    const chatBtn = document.getElementById('chatBtn');

    chatWidget.classList.toggle('active');

    // Toggle Icon
    const icon = chatBtn.querySelector('i');
    if (chatWidget.classList.contains('active')) {
        icon.className = 'fas fa-times';
        chatBtn.style.transform = 'rotate(90deg)';
        chatBtn.style.backgroundColor = '#2D3748'; // Darker color when open
    } else {
        icon.className = 'fas fa-comment-dots';
        chatBtn.style.transform = 'rotate(0deg)';
        chatBtn.style.backgroundColor = 'var(--primary-red)';
    }
}

// Hero Carousel Logic
let currentSlide = 0;
const totalSlides = 2;
const track = document.getElementById('heroTrack');
const dots = document.querySelectorAll('.nav-dot');
let slideInterval;

function goToSlide(index) {
    currentSlide = index;
    // Update Track Position
    // Since we have 2 slides, 200% width.
    // Slide 0: 0%, Slide 1: -50% (relative to track width? No, track is flex)
    // If track is 200% wide, moving -50% of track width moves to 2nd slide.
    track.style.transform = `translateX(-${index * 50}%)`;

    // Update Dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    // Reset Timer
    resetTimer();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000); // 5 seconds
}

// Start Auto Play
resetTimer();
