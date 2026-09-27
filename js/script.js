document.addEventListener('DOMContentLoaded', function () {
    // Dynamic year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Scroll-to-top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // Smooth scroll for anchor links (About Me -> Contacts)
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    });

    console.log('Aleksandr Gladskoy — Software Engineer');
});