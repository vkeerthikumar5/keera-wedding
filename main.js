document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Floating Petals (Hearts) Generation
    const petalContainer = document.getElementById('petals');
    const colors = ['#f8dada', '#f2c1c1', '#e5a5a5', '#d98a8a'];

    const createPetal = () => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Randomize appearance
        const startX = Math.random() * 100;
        const startY = -50;
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 10;
        const size = 10 + Math.random() * 20;

        petal.style.left = startX + 'vw';
        petal.style.top = startY + 'px';
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        petal.style.borderRadius = '50% 0 150% 50%'; // Heart-like petal shape
        
        petalContainer.appendChild(petal);

        // Remove petal after animation
        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    };

    // Create petals periodically
    setInterval(createPetal, 1000);

    // Initial batch
    for(let i=0; i<15; i++) createPetal();

    // RSVP Form Submission (Mockup)
    const form = document.getElementById('rsvp-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn');
        btn.textContent = 'Invitation Received! ❤️';
        btn.style.backgroundColor = '#4CAF50';
        form.reset();
        
        // Sprinkle more petals on success
        for(let i=0; i<30; i++) setTimeout(createPetal, i * 100);
    });
});
