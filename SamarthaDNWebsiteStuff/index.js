// Existing code (keep this part unchanged)
function toggleEventDetails(header) {
    const body = header.nextElementSibling;
    const isExpanded = body.classList.contains('expanded');

    // Store the current scroll position
    const scrollPosition = window.scrollY;

    // Toggle the expanded class
    body.classList.toggle('expanded');

    if (isExpanded) {
        body.style.maxHeight = null;
    } else {
        body.style.maxHeight = body.scrollHeight + "px";
    }

    // Use requestAnimationFrame to wait for the DOM to update
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            // Restore the scroll position
            window.scrollTo(0, scrollPosition);
        });
    });
}

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

// Recalculate max-height on window resize
window.addEventListener('resize', () => {
    document.querySelectorAll('.event-card-body.expanded').forEach(body => {
        body.style.maxHeight = body.scrollHeight + "px";
    });
});

// New code for handling RSVP form submission
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