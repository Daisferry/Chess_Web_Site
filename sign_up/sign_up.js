    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const loginTextLink = document.getElementById('login-text-link');

    registerLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
      loginLink.style.display = 'block';
    });

    loginTextLink.addEventListener('click', (e) => {
      e.preventDefault();
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
      loginLink.style.display = 'none';
    });


    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Login successful! (Nu, nu ti-am furat datele.. inca.)');
    });

    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Registration successful! (Nu, nu ti-am furat datele.. inca.)');
    });