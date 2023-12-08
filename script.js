// Fonction pour détecter lorsque la section est visible à l'écran
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Fonction pour activer les animations
function activateAnimations() {
    const sections = document.querySelectorAll('.fade-in');

    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('active');

            // Animation de la barre de progression
            const progressBars = section.querySelectorAll('.progress');
            progressBars.forEach((progressBar) => {
                const progressValue = progressBar.getAttribute('data-progress');
                progressBar.style.width = progressValue;
            });
        }
    });
}



// Déclencher les animations lorsque la page est chargée et lors du défilement
window.addEventListener('load', activateAnimations);
window.addEventListener('scroll', activateAnimations);



// Fonction pour gérer le défilement en douceur
function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Écoutez les clics sur les liens de la navbar
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        smoothScroll(targetId);
    });
});



