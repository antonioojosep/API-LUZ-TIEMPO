// Elementos del DOM
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

// Alternar entre formularios
showRegisterLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

showLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// Login
document.getElementById('login').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  //mirar el puerto que tiene el localhost pa ponerlo en el fetch <3
  try {
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Inicio de sesión exitoso');
      console.log('Datos del usuario:', data);
      // Redirigir a index.html
      window.location.href = 'index.html';
    } else {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error en el servidor');
  }
});

// Registro
document.getElementById('register').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const passwordConfirm = document.getElementById('register-password-confirm').value;

  if (password !== passwordConfirm) {
    alert('Las contraseñas no coinciden');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert('Registrado correctamente. Por favor, inicie sesión.');
      // Mostrar formulario de login
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    } else {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  } catch (error) {
    console.error('Error al registrar:', error);
    alert('Error en el servidor');
  }
});
