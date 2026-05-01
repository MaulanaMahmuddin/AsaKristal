// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
    }
    // Remove active state when scrolling
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(item => {
            item.classList.remove('active');
        });
        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.depot-card, .product-card, .why-us-card, .gallery-item, .section-title');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Location search function
function searchLocation() {
    const searchInput = document.getElementById('searchLocation');
    const searchTerm = searchInput.value.toLowerCase().trim();
    const provinceCards = document.querySelectorAll('.province-card');
    
    if (searchTerm === '') {
        provinceCards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
    provinceCards.forEach(card => {
        const provinceName = card.textContent.toLowerCase();
        if (provinceName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Real-time search on input
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchLocation');
    if (searchInput) {
        searchInput.addEventListener('input', searchLocation);
    }
});

// Disable right-click and certain keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault()
  }
})
