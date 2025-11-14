// Shared theme toggle functionality
// Theme toggle functionality
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    if (!toggleBtn || !themeIcon) {
        // Retry if elements not ready yet
        setTimeout(initThemeToggle, 100);
        return;
    }

    // Apply saved theme on load
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            body.classList.add('dark-mode');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            toggleBtn.setAttribute('aria-label', 'Switch to light mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
            body.classList.remove('dark-mode');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        }
        
        // Update particles if available
        if (typeof updateParticlesTheme === 'function') {
            setTimeout(updateParticlesTheme, 100);
        }
    }

    // Remove pending class if exists
    document.documentElement.classList.remove('dark-mode-pending');

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Toggle theme on button click
    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Initialize theme toggle when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
    // DOM is already ready
    initThemeToggle();
}

