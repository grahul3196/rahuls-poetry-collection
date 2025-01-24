document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carouselImages = document.querySelectorAll('.book-carousel img');
    let currentIndex = 0;

    function showNextImage() {
        carouselImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);

    // Featured content
    const featuredList = document.getElementById('featured-list');
    const featuredItems = [
        'कविता १: सुंदरता',
        'कविता २: जीवनाचे रंग',
        'लेख १: विज्ञान आणि तंत्रज्ञानाचे महत्त्व',
        'लेख २: समाजातील बदल'
    ];

    featuredItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        featuredList.appendChild(listItem);
    });

    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-in');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Search functionality
    function searchContent() {
        const query = document.getElementById('search-bar').value.toLowerCase();
        const contentItems = document.querySelectorAll('.content-item');

        contentItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    window.searchContent = searchContent;

    // Contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        alert(`Thank you for reaching out, ${name}! We will get back to you at ${email}.`);
        contactForm.reset();
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});




