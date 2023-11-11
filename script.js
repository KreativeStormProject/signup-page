document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const createButton = document.getElementById('create-button');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const passwordMatchError = document.getElementById('password-match-error');
  

    form.addEventListener('input', function () {
      const inputs = form.querySelectorAll('input[required]');
      let allFieldsFilled = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          allFieldsFilled = false;
        }
      });
  
      createButton.disabled = !allFieldsFilled;
    });
  
    confirmPasswordInput.addEventListener('input', function () {
      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.classList.add('password-mismatch');
        passwordMatchError.style.display = 'block';
        // createButton.disabled = allFieldsFilled

      } else {
        confirmPasswordInput.classList.remove('password-mismatch');
        passwordMatchError.style.display = 'none';
      }
    });
});
