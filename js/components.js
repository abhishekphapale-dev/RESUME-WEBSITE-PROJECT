// components.js - UI Component Builders

const components = {
    /**
     * Render Skills Section
     * @param {Array} skillsData - Skills data array
     * @param {string} containerId - Container element ID
     */
    renderSkills(skillsData, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        skillsData.forEach(category => {
            const categoryDiv = helpers.createElement('div', 'skill-category');

            // Create category header
            const titleDiv = helpers.createElement('div', 'category-title');
            const iconSpan = helpers.createElementWithText('span', category.icon, 'category-icon');
            const categoryText = document.createTextNode(category.category);
            
            titleDiv.appendChild(iconSpan);
            titleDiv.appendChild(categoryText);

            // Create skills list
            const skillsList = helpers.createElement('ul', 'skill-list');

            category.skills.forEach(skill => {
                const skillItem = helpers.createElement('li', 'skill-item');
                const skillName = helpers.createElementWithText('div', skill.name, 'skill-name');
                
                const barContainer = helpers.createElement('div', 'skill-bar-container');
                const bar = helpers.createElement('div', 'skill-bar');
                bar.style.width = `${skill.level}%`;
                
                barContainer.appendChild(bar);
                skillItem.appendChild(skillName);
                skillItem.appendChild(barContainer);
                skillsList.appendChild(skillItem);
            });

            categoryDiv.appendChild(titleDiv);
            categoryDiv.appendChild(skillsList);
            container.appendChild(categoryDiv);
        });
    },

    /**
     * Render Experience Section
     * @param {Array} experienceData - Experience data array
     * @param {string} containerId - Container element ID
     */
    renderExperience(experienceData, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        experienceData.forEach(exp => {
            const card = helpers.createElement('div', 'experience-card');

            // Header
            const header = helpers.createElement('div', 'experience-header');
            const infoDiv = helpers.createElement('div');
            
            const title = helpers.createElementWithText('h3', exp.title, 'job-title');
            const company = helpers.createElementWithText('p', exp.company, 'company');
            
            infoDiv.appendChild(title);
            infoDiv.appendChild(company);
            
            const duration = helpers.createElementWithText('span', exp.duration, 'duration');
            
            header.appendChild(infoDiv);
            header.appendChild(duration);

            // Tech Stack
            const techStack = helpers.createElement('div', 'tech-stack');
            exp.technologies.forEach(tech => {
                techStack.appendChild(helpers.createTechBadge(tech));
            });

            // Achievements
            const achievements = helpers.createElement('ul', 'achievements');
            exp.achievements.forEach(achievement => {
                achievements.appendChild(helpers.createListItem(achievement));
            });

            card.appendChild(header);
            card.appendChild(techStack);
            card.appendChild(achievements);
            container.appendChild(card);
        });
    },

    /**
     * Render Projects Section
     * @param {Array} projectsData - Projects data array
     * @param {string} containerId - Container element ID
     */
    renderProjects(projectsData, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        projectsData.forEach(project => {
            const card = helpers.createElement('div', 'project-card');

            // Header
            const header = helpers.createElement('div', 'project-header');
            const title = helpers.createElementWithText('h3', project.title, 'project-title');
            const date = helpers.createElementWithText('span', project.date, 'project-date');
            
            header.appendChild(title);
            header.appendChild(date);

            // Tech Stack
            const techStack = helpers.createElement('div', 'tech-stack');
            project.technologies.forEach(tech => {
                techStack.appendChild(helpers.createTechBadge(tech));
            });

            // Description
            const description = helpers.createElementWithText('p', project.description, 'project-description');

            // Highlights
            const highlights = helpers.createElement('ul', 'project-highlights');
            project.highlights.forEach(highlight => {
                highlights.appendChild(helpers.createListItem(highlight));
            });

            card.appendChild(header);
            card.appendChild(techStack);
            card.appendChild(description);
            card.appendChild(highlights);
            container.appendChild(card);
        });
    },

    /**
     * Render Certifications Section
     * @param {Array} certificationsData - Certifications data array
     * @param {string} containerId - Container element ID
     */
    renderCertifications(certificationsData, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        certificationsData.forEach(cert => {
            const card = helpers.createElement('div', 'cert-card');

            const icon = helpers.createElementWithText('div', cert.icon, 'cert-icon');
            const title = helpers.createElementWithText('h3', cert.title, 'cert-title');
            const issuer = helpers.createElementWithText('p', `${cert.issuer} • ${cert.date}`, 'cert-issuer');
            const description = helpers.createElementWithText('p', cert.description, 'cert-description');

            helpers.appendChildren(card, [icon, title, issuer, description]);
            container.appendChild(card);
        });
    },

    /**
     * Render all sections
     */
    renderAll() {
        this.renderSkills(resumeData.skills, 'skills-container');
        this.renderExperience(resumeData.experience, 'experience-container');
        this.renderProjects(resumeData.projects, 'projects-container');
        this.renderCertifications(resumeData.certifications, 'certifications-container');
    }
};