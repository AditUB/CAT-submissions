document.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('fade-in');
    setTimeout(() => {
        document.body.classList.add('show');
    }, 50);
});

document.querySelectorAll('[data-nav-link]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        } else if (href.endsWith('.html')) {
            e.preventDefault();
            document.body.classList.remove('show');
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        }
    });
});

// Handle RSVP form submission
document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.querySelector('#rsvpModal form');
    const rsvpModal = document.getElementById('rsvpModal');
    const modalBody = rsvpModal.querySelector('.modal-body');
    const modalInstance = new bootstrap.Modal(rsvpModal);

    rsvpForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Disable form inputs and submit button
        Array.from(rsvpForm.elements).forEach(el => el.disabled = true);

        // Simulate a POST request with a 1-second delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show confirmation message
        modalBody.innerHTML = `
            <div class="text-center py-4">
                <h3 class="text-orange mb-3">Thank you for your RSVP!</h3>
                <p class="text-light">We can't wait to see you at the party!</p>
            </div>
        `;

        // Reset and close modal after 3 seconds
        setTimeout(() => {
            modalInstance.hide();
            rsvpForm.reset();
            Array.from(rsvpForm.elements).forEach(el => el.disabled = false);
            modalBody.innerHTML = rsvpForm.outerHTML;
        }, 3000);
    });
});