import { ref, watchEffect } from 'vue';

const isDark = ref(true);

// Initialize from localStorage or system preference
const storedTheme = localStorage.getItem('privy-theme');
if (storedTheme) {
    isDark.value = storedTheme === 'dark';
} else {
    // Default to dark mode (current design)
    isDark.value = true;
}

// Apply theme to document
const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
};

// Watch for changes and persist
watchEffect(() => {
    applyTheme();
    localStorage.setItem('privy-theme', isDark.value ? 'dark' : 'light');
});

export function useTheme() {
    const toggleTheme = () => {
        isDark.value = !isDark.value;
    };

    return {
        isDark,
        toggleTheme
    };
}
