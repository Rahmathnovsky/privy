import { onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Vue composable for GSAP ScrollTrigger animations
 * Provides helper functions for common scroll-based animations
 */
export function useScrollAnimations() {

    // Cleanup triggers on unmount
    onUnmounted(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    });

    /**
     * Fade in element when scrolling into view
     */
    const fadeIn = (element, options = {}) => {
        if (!element) return;

        const defaults = {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            start: 'top 90%',
            toggleActions: 'play none none none'
        };
        const config = { ...defaults, ...options };

        // Set initial state
        gsap.set(element, { opacity: 1, y: 0 });

        gsap.from(element, {
            duration: config.duration,
            y: config.y,
            opacity: config.opacity,
            ease: config.ease,
            immediateRender: false,
            scrollTrigger: {
                trigger: element,
                start: config.start,
                toggleActions: config.toggleActions
            }
        });
    };

    /**
     * Stagger animation for multiple elements
     */
    const staggerIn = (elements, options = {}) => {
        if (!elements || elements.length === 0) return;

        const defaults = {
            duration: 0.8,
            y: 60,
            opacity: 0,
            stagger: 0.15,
            ease: 'power2.out',
            start: 'top 90%'
        };
        const config = { ...defaults, ...options };

        // Set initial state for all elements
        gsap.set(elements, { opacity: 1, y: 0 });

        gsap.from(elements, {
            duration: config.duration,
            y: config.y,
            opacity: config.opacity,
            stagger: config.stagger,
            ease: config.ease,
            immediateRender: false,
            scrollTrigger: {
                trigger: elements[0] || elements,
                start: config.start,
                toggleActions: 'play none none none'
            }
        });
    };

    /**
     * Slide in from left
     */
    const slideInLeft = (element, options = {}) => {
        if (!element) return;

        const defaults = {
            duration: 1,
            x: -100,
            opacity: 0,
            ease: 'power2.out',
            start: 'top 90%'
        };
        const config = { ...defaults, ...options };

        // Set initial state
        gsap.set(element, { opacity: 1, x: 0 });

        gsap.from(element, {
            duration: config.duration,
            x: config.x,
            opacity: config.opacity,
            ease: config.ease,
            immediateRender: false,
            scrollTrigger: {
                trigger: element,
                start: config.start,
                toggleActions: 'play none none none'
            }
        });
    };

    /**
     * Scale up animation
     */
    const scaleUp = (element, options = {}) => {
        if (!element) return;

        const defaults = {
            duration: 0.8,
            scale: 0.9,
            opacity: 0,
            ease: 'back.out(1.7)',
            start: 'top 90%'
        };
        const config = { ...defaults, ...options };

        // Set initial state
        gsap.set(element, { opacity: 1, scale: 1 });

        gsap.from(element, {
            duration: config.duration,
            scale: config.scale,
            opacity: config.opacity,
            ease: config.ease,
            immediateRender: false,
            scrollTrigger: {
                trigger: element,
                start: config.start,
                toggleActions: 'play none none none'
            }
        });
    };

    /**
     * Parallax effect (element moves slower than scroll)
     */
    const parallax = (element, options = {}) => {
        if (!element) return;

        const defaults = {
            yPercent: -30,
            ease: 'none',
            start: 'top bottom',
            end: 'bottom top'
        };
        const config = { ...defaults, ...options };

        gsap.to(element, {
            yPercent: config.yPercent,
            ease: config.ease,
            scrollTrigger: {
                trigger: element,
                start: config.start,
                end: config.end,
                scrub: true
            }
        });
    };

    /**
     * Counter animation (count up numbers)
     */
    const countUp = (element, endValue, options = {}) => {
        if (!element) return;

        const defaults = {
            duration: 2,
            ease: 'power2.out',
            start: 'top 80%'
        };
        const config = { ...defaults, ...options };

        const obj = { value: 0 };

        gsap.to(obj, {
            value: endValue,
            duration: config.duration,
            ease: config.ease,
            scrollTrigger: {
                trigger: element,
                start: config.start,
                toggleActions: 'play none none none'
            },
            onUpdate: () => {
                element.textContent = Math.round(obj.value).toLocaleString();
            }
        });
    };

    /**
     * Red glow pulse effect (Privy themed)
     */
    const glowPulse = (element, options = {}) => {
        if (!element) return;

        const defaults = {
            duration: 2,
            boxShadow: '0 0 60px rgba(225, 32, 38, 0.4)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        };
        const config = { ...defaults, ...options };

        gsap.to(element, {
            duration: config.duration,
            boxShadow: config.boxShadow,
            repeat: config.repeat,
            yoyo: config.yoyo,
            ease: config.ease
        });
    };

    return {
        gsap,
        ScrollTrigger,
        fadeIn,
        staggerIn,
        slideInLeft,
        scaleUp,
        parallax,
        countUp,
        glowPulse
    };
}
