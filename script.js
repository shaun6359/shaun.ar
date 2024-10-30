// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// GSAP Animations
gsap.from("#intro-content", {
    opacity: 0,
    duration: 2,
    y: 50,
    ease: "power4.out",
});

gsap.from("#about", {
    opacity: 0,
    duration: 2,
    y: 50,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Staggered Fade-In with Slide Effect for Projects Section
gsap.from(".project", {
    opacity: 0,
    y: 50,  // Slide up from 50px below
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.2, // Stagger the animations by 0.2 seconds
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%", // Start the animation when the top of the section hits 80% of the viewport
        end: "bottom 20%", // End the animation when the bottom of the section hits 20% of the viewport
        scrub: true
    }
});

// GSAP animation for info boxes
gsap.from(".info-box.left", {
    x: -600, // Slide in from the left
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".info-container",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".info-box.right", {
    x: 600, // Slide in from the right
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".info-container",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
