// helpers.js - Utility Functions

const helpers = {
    /**
     * Create an HTML element with classes and attributes
     * @param {string} tag - HTML tag name
     * @param {string|string[]} classes - Class name(s) to add
     * @param {Object} attributes - Attributes to set
     * @returns {HTMLElement}
     */
    createElement(tag, classes = '', attributes = {}) {
        const element = document.createElement(tag);
        
        if (classes) {
            const classList = Array.isArray(classes) ? classes : [classes];
            element.classList.add(...classList);
        }
        
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
        
        return element;
    },

    /**
     * Create an element with text content
     * @param {string} tag - HTML tag name
     * @param {string} text - Text content
     * @param {string|string[]} classes - Class name(s) to add
     * @returns {HTMLElement}
     */
    createElementWithText(tag, text, classes = '') {
        const element = this.createElement(tag, classes);
        element.textContent = text;
        return element;
    },

    /**
     * Append multiple children to a parent element
     * @param {HTMLElement} parent - Parent element
     * @param {HTMLElement[]} children - Array of child elements
     */
    appendChildren(parent, children) {
        children.forEach(child => {
            if (child) parent.appendChild(child);
        });
    },

    /**
     * Create a tech badge element
     * @param {string} tech - Technology name
     * @returns {HTMLElement}
     */
    createTechBadge(tech) {
        return this.createElementWithText('span', tech, 'tech-badge');
    },

    /**
     * Create a list item with a bullet point
     * @param {string} text - List item text
     * @returns {HTMLElement}
     */
    createListItem(text) {
        const li = this.createElement('li');
        li.textContent = text;
        return li;
    },

    /**
     * Intersection Observer for scroll animations
     * @param {string} selector - CSS selector for elements to observe
     * @param {Object} options - Observer options
     */
    initScrollObserver(selector, options = {}) {
        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerOptions = { ...defaultOptions, ...options };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });
    },

    /**
     * Smooth scroll to element
     * @param {string} selector - CSS selector of target element
     */
    smoothScroll(selector) {
        const target = document.querySelector(selector);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },

    /**
     * Debounce function for performance optimization
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function}
     */
    debounce(func, wait = 250) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};