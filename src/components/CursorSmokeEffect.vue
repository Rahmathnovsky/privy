<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const canvasRef = ref(null);
let ctx = null;
let particles = [];
let animationId = null;
let mouse = { x: 0, y: 0 };
let isMoving = false;
let stopMovingTimeout = null;

// Particle class
class Particle {
    constructor(x, y, isClick = false) {
        this.x = x;
        this.y = y;
        // Random velocity
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5 - 1; // Slight upward drift
        
        // Clicks explode more
        if (isClick) {
            this.vx = (Math.random() - 0.5) * 5;
            this.vy = (Math.random() - 0.5) * 5;
        }

        this.size = Math.random() * 10 + 5; // 5-15px
        this.life = 1; // Opacity/Life
        this.decay = Math.random() * 0.02 + 0.01; // Fade speed
        this.color = `rgba(200, 200, 200, ${this.life})`; 
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.size *= 0.95; // Shrink slowly
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(200, 200, 200, ${this.life * 0.5})`; // Semi-transparent smoke
        context.fill();
    }
}

const resizeCanvas = () => {
    if (canvasRef.value) {
        canvasRef.value.width = window.innerWidth;
        canvasRef.value.height = window.innerHeight;
    }
};

const createParticles = (x, y, count, isClick = false) => {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, isClick));
    }
};

const animate = () => {
    if (!ctx || !canvasRef.value) return;

    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);

        if (particles[i].life <= 0 || particles[i].size <= 0.5) {
            particles.splice(i, 1);
            i--;
        }
    }

    // Continue animation loop
    animationId = requestAnimationFrame(animate);
};

const onMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    // Spawn smoke while moving
    createParticles(mouse.x, mouse.y, 1);
    
    isMoving = true;
    clearTimeout(stopMovingTimeout);
    stopMovingTimeout = setTimeout(() => {
        isMoving = false;
    }, 100);
};

const onClick = (e) => {
    createParticles(e.clientX, e.clientY, 10, true); // Burst on click
};

onMounted(() => {
    ctx = canvasRef.value.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    
    animate();
});

onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('click', onClick);
    cancelAnimationFrame(animationId);
});
</script>

<template>
    <canvas ref="canvasRef" class="smoke-canvas"></canvas>
</template>

<style scoped>
.smoke-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none; /* Let clicks pass through */
    z-index: 9999; /* On top of everything */
}
</style>
