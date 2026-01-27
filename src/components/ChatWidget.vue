<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleChat = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div>
        <!-- Chat Widget Window -->
        <div class="chat-widget" :class="{ active: isOpen }" id="chatWidget">
            <div class="chat-header">
                <div class="chat-header-info">
                    <div class="chat-logo">
                        <i class="fas fa-fingerprint"></i>
                    </div>
                    <div class="chat-titles">
                        <h4>Privy Support</h4>
                        <span>Get Easy with Privy</span>
                    </div>
                </div>
                <button class="chat-close" @click="toggleChat">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            <div class="chat-body">
                <div class="chat-date">Today, 4:01 PM</div>
                <div class="chat-date"
                    style="text-align: left; margin-top: 10px; font-size: 12px; color: #718096; margin-left: 40px;">
                    Customer Support Privy
                </div>
                <div class="message-row">
                    <div class="message-avatar">
                        <i class="fas fa-headset"></i>
                    </div>
                    <div class="message-bubble">
                        Hello, how can we help you? Feel free to ask if there is anything you want to know about our services.
                        <span class="message-time">4:01 PM</span>
                    </div>
                </div>
            </div>
            <div class="chat-footer">
                <i class="fas fa-paperclip chat-attach"></i>
                <input type="text" class="chat-input" placeholder="Type a message...">
            </div>
        </div>

        <!-- Floating Live Chat Button -->
        <div class="live-chat-btn" @click="toggleChat"
            :style="{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', backgroundColor: isOpen ? '#2D3748' : 'var(--primary-red)' }">
            <i :class="isOpen ? 'fas fa-times' : 'fas fa-comment-dots'"></i>
        </div>
    </div>
</template>
