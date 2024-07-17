document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate__animated');
    
    function animateOnScroll() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                element.classList.add('animate__fadeIn');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // initial check
});
