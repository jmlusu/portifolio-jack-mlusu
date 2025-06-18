document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        const links = document.querySelectorAll('.nav-links li');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });

});

/* Note: For the link fade and hamburger animations to work, you would add this to the bottom of your style.css file:

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}

.toggle .hamburger div:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
.toggle .hamburger div:nth-child(2) { opacity: 0; }
.toggle .hamburger div:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }
*/