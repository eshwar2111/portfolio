// GSAP Animations for page transitions
gsap.registerPlugin(ScrollTrigger);

// Fade-in effect for sections on scroll
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    gsap.fromTo(section, {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse"
        }
    });
});

// Navigation Bar animation (smooth scroll to section)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        gsap.to(window, {duration: 1.5, scrollTo: this.getAttribute('href')});
    });
});

// GSAP animation for "Eshwar B" moving up to the navigation bar
window.addEventListener('scroll', () => {
    const heroText = document.querySelector('#hero h1');
    const header = document.getElementById('header');

    // Scroll down 50px to trigger the animation
    if (window.scrollY > 50) {
        gsap.to(heroText, { y: -150, duration: 1, ease: "power2.out" }); // Move "Eshwar B" up
        header.style.top = "0"; // Keep header fixed at the top
    } else {
        gsap.to(heroText, { y: 50, duration: 1, ease: "power2.out" }); // Reset position
        header.style.top = "0"; // Keep header fixed at the top
    }
});

