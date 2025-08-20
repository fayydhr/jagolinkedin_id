document.addEventListener('DOMContentLoaded', () => {

    // --- FAQ Accordion Functionality ---
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const parentItem = btn.closest('.faq-item');
            const answer = btn.nextElementSibling;
            const isActive = parentItem.classList.toggle('active');

            // Close other active FAQs
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== parentItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                    item.querySelector('.faq-toggle-icon').textContent = '+';
                }
            });

            if (isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                btn.querySelector('.faq-toggle-icon').textContent = '—';
            } else {
                answer.style.maxHeight = null;
                btn.querySelector('.faq-toggle-icon').textContent = '+';
            }
        });
    });

    // --- Key Benefits Slider Functionality ---
    const slider = document.querySelector('.benefits-slider');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');

    const cardWidth = 419 + 20; // lebar kartu + margin-right

    if (slider && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }

    // --- Scroll Active Link Functionality ---
    const links = document.querySelectorAll('.site-nav .nav-link');
    const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
    const setActive = () => {
        const y = window.scrollY + 120;
        let current = links[0];
        sections.forEach((sec, i) => {
            if (sec && sec.offsetTop <= y) current = links[i];
        });
        links.forEach(l => l.classList.remove('active'));
        if (current) {
            current.classList.add('active');
        }
    };
    window.addEventListener('scroll', setActive);
    setActive();

    // --- Fade-in Animation ---
    const fadeElems = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });
    fadeElems.forEach(el => observer.observe(el));
});