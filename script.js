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
});

