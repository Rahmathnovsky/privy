<script setup>
const features = [
    {
        icon: 'fas fa-folder-open',
        title: 'Document Management',
        description: 'Organize everything from contracts to invoices with centralized document storage.',
        link: 'Explore Document Management'
    },
    {
        icon: 'fas fa-tasks',
        title: 'Task & Approvals',
        description: 'Track document status, assign approvers, and manage workflows efficiently.',
        link: 'Explore Task Management'
    },
    {
        icon: 'fas fa-comments',
        title: 'Team Collaboration',
        description: 'Comment, discuss, and collaborate on documents in real-time with your team.',
        link: 'Explore Collaboration'
    },
    {
        icon: 'fas fa-code-branch',
        title: 'Version Control',
        description: 'Track document changes, maintain history, and restore previous versions easily.',
        link: 'Explore Version Control'
    }
];
</script>

<template>
    <section class="collab-section">
        <div class="container">
            <!-- Header -->
            <div class="collab-header">
                <span class="section-label">Collaboration</span>
                <h2 class="section-title">Work Together, Achieve More</h2>
                <p class="section-subtitle">
                    From planning and discussion to final approval, 
                    Privy keeps your team's communication and documents in sync.
                </p>
            </div>
            
            <!-- Main Visual + Feature -->
            <div class="collab-main">
                <div class="main-visual">
                    <div class="visual-window">
                        <div class="window-header">
                            <div class="dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span class="window-title">Enterprise Dashboard</span>
                        </div>
                        <div class="window-content">
                            <div class="dashboard-sidebar">
                                <div class="sidebar-item active"><i class="fas fa-home"></i></div>
                                <div class="sidebar-item"><i class="fas fa-file-alt"></i></div>
                                <div class="sidebar-item"><i class="fas fa-users"></i></div>
                                <div class="sidebar-item"><i class="fas fa-cog"></i></div>
                            </div>
                            <div class="dashboard-main">
                                <div class="dash-header">
                                    <div class="search-bar">
                                        <i class="fas fa-search"></i>
                                        <span>Search documents...</span>
                                    </div>
                                </div>
                                <div class="dash-cards">
                                    <div class="dash-card" v-for="n in 4" :key="n">
                                        <div class="card-icon-small"></div>
                                        <div class="card-lines">
                                            <div class="line"></div>
                                            <div class="line short"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="main-content">
                    <h3>Plan with clarity.</h3>
                    <p>
                        Organize everything from high-level contract management to everyday 
                        document approvals. Enterprise dashboard gives you full visibility.
                    </p>
                    <a href="#" class="main-cta">
                        Explore Enterprise Dashboard <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            
            <!-- Features Grid -->
            <div class="collab-grid">
                <div class="collab-card" v-for="feature in features" :key="feature.title">
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
    </section>
</template>

<style scoped>
.collab-section {
    background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
    padding: 120px 0;
}

/* Header */
.collab-header {
    text-align: center;
    margin-bottom: 80px;
}

.section-label {
    display: inline-block;
    background: rgba(66, 153, 225, 0.1);
    color: #4299E1;
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
}

.section-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    max-width: 550px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Main Section */
.collab-main {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: center;
    margin-bottom: 80px;
}

/* Visual Window */
.main-visual {
    perspective: 1000px;
}

.visual-window {
    background: #1e1e1e;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
    transform: rotateY(-5deg) rotateX(5deg);
    transition: transform 0.3s ease;
}

.visual-window:hover {
    transform: rotateY(0) rotateX(0);
}

.window-header {
    display: flex;
    align-items: center;
    gap: 16px;
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
}

.dots span:first-child { background: #ff5f57; }
.dots span:nth-child(2) { background: #ffbd2e; }
.dots span:nth-child(3) { background: #28ca42; }

.window-title {
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
}

.window-content {
    display: flex;
    min-height: 300px;
}

.dashboard-sidebar {
    width: 60px;
    background: #252525;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
    gap: 16px;
}

.sidebar-item {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.2s ease;
}

.sidebar-item.active {
    background: var(--primary-red);
    color: #fff;
}

.dashboard-main {
    flex: 1;
    padding: 20px;
}

.dash-header {
    margin-bottom: 20px;
}

.search-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 14px;
}

.dash-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.dash-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 16px;
    display: flex;
    gap: 12px;
}

.card-icon-small {
    width: 40px;
    height: 40px;
    background: rgba(225, 32, 38, 0.2);
    border-radius: 8px;
}

.card-lines {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
}

.line {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.line.short {
    width: 60%;
}

/* Main Content */
.main-content h3 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
}

.main-content p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
    margin-bottom: 24px;
}

.main-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--primary-red);
    font-weight: 600;
    transition: all 0.3s ease;
}

.main-cta:hover {
    gap: 12px;
}

/* Features Grid */
.collab-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.collab-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.collab-card::before {
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

.collab-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: var(--primary-red);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(225, 32, 38, 0.1);
}

.collab-card:hover::before {
    opacity: 1;
}

.card-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(225, 32, 38, 0.1);
    border-radius: 12px;
    color: var(--primary-red);
    font-size: 20px;
    margin-bottom: 20px;
    transition: all 0.4s ease;
}

.collab-card:hover .card-icon {
    transform: scale(1.1) rotate(5deg);
    background: var(--primary-red);
    color: #fff;
    box-shadow: 0 10px 20px rgba(225, 32, 38, 0.3);
}

.collab-card h4 {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
}

.collab-card p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
}

.card-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--primary-red);
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
}

.card-link:hover {
    gap: 10px;
    text-shadow: 0 0 10px rgba(225, 32, 38, 0.5);
}

/* Responsive */
@media (max-width: 1024px) {
    .collab-main {
        grid-template-columns: 1fr;
    }
    
    .collab-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .visual-window {
        transform: none;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 32px;
    }
    
    .collab-grid {
        grid-template-columns: 1fr;
    }
}
</style>

