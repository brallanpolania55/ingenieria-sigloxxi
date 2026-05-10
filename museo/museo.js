document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('museum');
    const slides = document.querySelectorAll('.slide, .hero');
    const dots = document.querySelectorAll('.nav-dot');
    const progressFill = document.querySelector('.progress-fill');

    let currentSlide = 0;
    const totalSlides = 8;

    const updateDots = () => {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    };

    const updateProgress = () => {
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressFill.style.height = `${progress}%`;
    };

    const updateSlide = (index) => {
        if (index >= 0 && index < totalSlides) {
            slides[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateDots();
            updateProgress();
            updateSlide(index);
        });
    });

    const observerOptions = {
        root: container,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.getAttribute('data-index')) + 1;
                if (index !== currentSlide && index >= 0 && index < totalSlides) {
                    currentSlide = index;
                    updateDots();
                    updateProgress();
                }
            }
        });
    }, observerOptions);

    slides.forEach(slide => observer.observe(slide));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            e.preventDefault();
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateDots();
                updateProgress();
                updateSlide(currentSlide);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            e.preventDefault();
            if (currentSlide > 0) {
                currentSlide--;
                updateDots();
                updateProgress();
                updateSlide(currentSlide);
            }
        }
    });

    updateProgress();
});