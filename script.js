

const hobbyButtons = document.querySelectorAll('.hobby-btn');
const hobbyDescriptions = document.querySelectorAll('.hobby-description');
const hobbyImages = document.querySelectorAll('.hobby-image');

// Function to handle hover effect
hobbyButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const hobby = button.dataset.hobby;
        
        // Remove active class from all
        hobbyButtons.forEach(btn => btn.classList.remove('active'));
        hobbyDescriptions.forEach(desc => desc.classList.remove('active'));
        hobbyImages.forEach(img => img.classList.remove('active'));
        
        // Add active class to current
        button.classList.add('active');
        document.querySelector(`[data-content="${hobby}"]`).classList.add('active');
        document.querySelector(`[data-image="${hobby}"]`).classList.add('active');
    });
});