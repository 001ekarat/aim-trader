document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '5px 0';
            navbar.style.backgroundColor = 'rgba(10, 14, 23, 0.98)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(10, 14, 23, 0.9)';
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle between menu and x icon
            const isOpened = navMenu.classList.contains('active');
            menuIcon.setAttribute('data-lucide', isOpened ? 'x' : 'menu');
            lucide.createIcons();
        });
    }

    // Smooth Scroll & Close Menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                
                // Close mobile menu
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuIcon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            }
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                formStatus.textContent = "Sending message...";
                formStatus.style.color = "var(--accent)";
                
                setTimeout(() => {
                    formStatus.textContent = "Thank you! Your message has been sent successfully.";
                    contactForm.reset();
                    setTimeout(() => formStatus.textContent = "", 5000);
                }, 1500);
            } else {
                formStatus.textContent = "Please fill in all fields.";
                formStatus.style.color = "#ef4444";
            }
        });
    }
});
