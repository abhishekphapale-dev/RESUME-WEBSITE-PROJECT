// animations.js - Animation and Interaction Logic

const animations = {
    /**
     * Initialize parallax effect on gradient orbs
     */
    initParallaxEffect() {
        document.addEventListener('mousemove', (e) => {
            const orbs = document.querySelectorAll('.gradient-orb');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 20;
                const xPos = (x - 0.5) * speed;
                const yPos = (y - 0.5) * speed;
                orb.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        });
    },

    /**
     * Initialize scroll indicator fade effect
     */
    initScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) return;

        const handleScroll = helpers.debounce(() => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }, 100);

        window.addEventListener('scroll', handleScroll);
    },

    /**
     * Initialize smooth scroll for anchor links
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                helpers.smoothScroll(targetId);
            });
        });
    },

    /**
     * Add stagger animation to skill bars
     */
    animateSkillBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-bar');
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.transform = 'scaleX(1)';
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.skill-category').forEach(category => {
            observer.observe(category);
        });
    },

    /**
     * Add hover effect to cards
     */
    initCardHoverEffects() {
        const cards = document.querySelectorAll(
            '.experience-card, .project-card, .cert-card, .skill-category'
        );

        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    },

    /**
     * Initialize typing effect for header (optional enhancement)
     */
    initTypingEffect() {
    },

    /**
     * Add fade-in animation to sections on scroll
     */
    initSectionAnimations() {
        helpers.initScrollObserver('section', {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
    },

    /**
     * Initialize all animations
     */
    initAll() {
        this.initParallaxEffect();
        this.initScrollIndicator();
        this.initSmoothScroll();
        this.animateSkillBars();
        this.initCardHoverEffects();
        this.initSectionAnimations();
    }
};