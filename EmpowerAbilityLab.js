
// JavaScript for interactivity and accessibility

// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalOpenBtns = document.querySelectorAll('.open-modal');

    if (modal && modalCloseBtn && modalOpenBtns) {
        modalOpenBtns.forEach(btn => btn.addEventListener('click', () => {
            modal.style.display = 'block';
        }));

        modalCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});

// Form validation
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission
    const emailField = document.getElementById('email');
    const errorField = document.getElementById('error-message');

    if (emailField && !emailField.value.includes('@')) {
        errorField.textContent = 'Please enter a valid email address.';
    } else {
        errorField.textContent = '';
        alert('Form submitted successfully!');
    }
}
