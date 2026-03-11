// Gerenciamento de navegação horizontal
const sectionsContainer = document.querySelector('.sections-container');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
let currentSection = 0;

function navigateToSection(index) {
    if (index < 0 || index >= sections.length) return;

    currentSection = index;
    const offset = -index * 100;
    sectionsContainer.style.transform = `translateX(${offset}vw)`;

    // Atualizar classes ativas
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
    });

    navLinks.forEach((link, i) => {
        link.classList.toggle('active', i === index);
    });
}

// Event listeners para links de navegação
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection(index);
    });
});

// Navegação com teclado (setas)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        navigateToSection(currentSection + 1);
    } else if (e.key === 'ArrowLeft') {
        navigateToSection(currentSection - 1);
    }
});

// Touch support para mobile
let touchStartX = 0;
let touchEndX = 0;

sectionsContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

sectionsContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            navigateToSection(currentSection + 1);
        } else {
            navigateToSection(currentSection - 1);
        }
    }
}

// Hierarchical Navigation System for Projects
const projectCards = document.querySelectorAll('.project-card');
const hierarchyLevels = document.querySelectorAll('.hierarchy-level');
const backButtons = document.querySelectorAll('.back-button[data-navigate]');
const detailNavButtons = document.querySelectorAll('.detail-nav-btn[data-project-nav]');
let currentLevel = 'root';
const totalProjects = projectCards.length;

// Navigate to project detail
projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.projectId;
        navigateToLevel(`project-${projectId}`);
    });
});

// Back button navigation
backButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetLevel = button.dataset.navigate;
        navigateToLevel(targetLevel);
    });
});

// Detail arrows navigation
detailNavButtons.forEach((button) => {
    button.addEventListener('click', () => {
        navigateBetweenProjects(button.dataset.projectNav);
    });
});

function getProjectIndexFromLevel(level) {
    if (!level.startsWith('project-')) return -1;
    return Number.parseInt(level.split('-')[1], 10);
}

function navigateBetweenProjects(direction) {
    const currentProjectIndex = getProjectIndexFromLevel(currentLevel);
    if (currentProjectIndex < 0) return;

    const nextProjectIndex = direction === 'next' ? currentProjectIndex + 1 : currentProjectIndex - 1;

    if (nextProjectIndex < 0 || nextProjectIndex >= totalProjects) return;

    navigateToLevel(`project-${nextProjectIndex}`);
}

function updateDetailNavState() {
    const currentProjectIndex = getProjectIndexFromLevel(currentLevel);
    if (currentProjectIndex < 0) return;

    const currentLevelEl = document.querySelector(`.hierarchy-level[data-level="${currentLevel}"]`);
    if (!currentLevelEl) return;

    const prevButton = currentLevelEl.querySelector('.detail-nav-btn[data-project-nav="prev"]');
    const nextButton = currentLevelEl.querySelector('.detail-nav-btn[data-project-nav="next"]');

    if (prevButton) {
        prevButton.disabled = currentProjectIndex === 0;
    }

    if (nextButton) {
        nextButton.disabled = currentProjectIndex === totalProjects - 1;
    }
}

function navigateToLevel(targetLevel) {
    if (targetLevel === currentLevel) return;

    const currentLevelEl = document.querySelector(`.hierarchy-level[data-level="${currentLevel}"]`);
    const targetLevelEl = document.querySelector(`.hierarchy-level[data-level="${targetLevel}"]`);

    if (!targetLevelEl || !currentLevelEl) return;

    // Determine animation direction
    const isGoingBack = targetLevel === 'root';

    // Animate out current level
    currentLevelEl.classList.remove('active');
    currentLevelEl.classList.add('exiting');

    // Animate in target level
    setTimeout(() => {
        targetLevelEl.style.transform = isGoingBack ? 'translateX(-100%)' : 'translateX(100%)';
        targetLevelEl.classList.add('active');

        setTimeout(() => {
            targetLevelEl.style.transform = 'translateX(0)';
        }, 10);

        // Clean up
        setTimeout(() => {
            currentLevelEl.classList.remove('exiting');
            currentLevelEl.style.transform = isGoingBack ? 'translateX(100%)' : 'translateX(-100%)';
        }, 600);
    }, 10);

    // Scroll to top of section
    const projectsSection = document.getElementById('projetos');
    if (projectsSection) {
        projectsSection.scrollTop = 0;
    }

    currentLevel = targetLevel;
    updateDetailNavState();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Only handle navigation when in projects section
    const projectsSection = document.getElementById('projetos');
    if (!projectsSection || !projectsSection.classList.contains('active')) return;

    if (e.key === 'Escape' && currentLevel !== 'root') {
        navigateToLevel('root');
    }
});
