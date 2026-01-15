// main.js - Main Entry Point

/**
 * Main Application Controller
 */
const App = {
    /**
     * Initialize the application
     */
    init() {
        console.log('🚀 Initializing Resume Website...');
        
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    },

    /**
     * Start the application
     */
    start() {
        try {
            // Render all components
            this.renderComponents();
            
            // Initialize animations
            this.initializeAnimations();
            
            // Set up event listeners
            this.setupEventListeners();
            
            console.log('✅ Resume Website Loaded Successfully!');
        } catch (error) {
            console.error('❌ Error initializing application:', error);
        }
    },

    /**
     * Render all UI components
     */
    renderComponents() {
        console.log('📦 Rendering components...');
        components.renderAll();
    },

    /**
     * Initialize all animations and effects
     */
    initializeAnimations() {
        console.log('✨ Initializing animations...');
        animations.initAll();
    },

    /**
     * Set up additional event listeners
     */
    setupEventListeners() {
        console.log('🎯 Setting up event listeners...');
        
        // Add any additional event listeners here
        // For example, form submissions, button clicks, etc.
        
        // Log when user scrolls past certain sections
        this.trackScrollProgress();
    },

    /**
     * Track scroll progress for analytics or additional features
     */
    trackScrollProgress() {
        const sections = document.querySelectorAll('section');
        const options = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`📍 Viewing section: ${entry.target.id}`);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    },

    /**
     * Utility method to check if all required data is loaded
     */
    validateData() {
        if (!resumeData) {
            throw new Error('Resume data not loaded');
        }
        
        if (!resumeData.skills || !resumeData.experience || 
            !resumeData.projects || !resumeData.certifications) {
            throw new Error('Incomplete resume data');
        }
        
        return true;
    }
};

// Initialize the application
App.init();

// Export for potential use in other modules or debugging
if (typeof window !== 'undefined') {
    window.App = App;
    window.resumeData = resumeData;
    window.helpers = helpers;
    window.components = components;
    window.animations = animations;
}