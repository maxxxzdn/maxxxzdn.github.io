document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile img');
    
    if (!profileImage) return;
    
    const currentSrc = profileImage.src;
    let availableImages = [];
    
    // Check which images actually exist
    const possibleImages = [
        currentSrc,
        currentSrc.replace('.jpg', '_alt.jpg').replace('.png', '_alt.png').replace('.jpeg', '_alt.jpeg'),
        currentSrc.replace('.jpg', '_alt2.jpg').replace('.png', '_alt2.png').replace('.jpeg', '_alt2.jpeg')
    ];
    
    // Test each image and build available list
    let testCount = 0;
    possibleImages.forEach((src, index) => {
        const img = new Image();
        img.onload = function() {
            if (!availableImages.includes(src)) {
                availableImages.push(src);
            }
            testCount++;
            if (testCount === possibleImages.length) {
                setupImageSwitcher();
            }
        };
        img.onerror = function() {
            testCount++;
            if (testCount === possibleImages.length) {
                setupImageSwitcher();
            }
        };
        img.src = src;
    });
    
    let currentIndex = 0;
    
    function setupImageSwitcher() {
        if (availableImages.length <= 1) return; // No switching if only one image
        
        profileImage.style.cursor = 'pointer';
        profileImage.title = 'Click to change profile picture';
        
        profileImage.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % availableImages.length;
            profileImage.src = availableImages[currentIndex];
        });
    }
});