document.addEventListener("DOMContentLoaded", () => {

    const fairwayPhotos = [
        'fairway-collection/golf1.jpeg',
        'fairway-collection/golf2.jpeg',
        'fairway-collection/golf3.jpeg',
        'fairway-collection/golf4.jpeg',
        'fairway-collection/golf5.jpeg',
        'fairway-collection/golf6.jpeg',
        'fairway-collection/golf7.jpeg',
        'fairway-collection/golf8.jpeg'
    ];

    const thumb = document.getElementById("fairwayThumb");

    if (thumb) {
        thumb.src = fairwayPhotos[Math.floor(Math.random() * fairwayPhotos.length)];
    }

    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('main')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Stagger service cards
    document.querySelectorAll('.service-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
    });

    // Scroll reveal
    const revealTargets = document.querySelectorAll(
        '.section-label, .section-title, .service-card, .quote, .contact-form'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => observer.observe(el));

});