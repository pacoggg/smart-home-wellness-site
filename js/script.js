document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.category-pill');
    const productCards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block';
                    // Optional: Add a fade-in animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
