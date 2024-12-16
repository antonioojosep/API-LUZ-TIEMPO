export const logear = () =>{
const app = document.getElementById("app");

// Crear contenedor de formulario de inicio de sesión
const loginFormContainer = document.createElement("div");
loginFormContainer.id = "login-form";
loginFormContainer.className = "form-container";

// Título de inicio de sesión
const loginTitle = document.createElement("h2");
loginTitle.innerText = "Iniciar Sesión";
loginFormContainer.appendChild(loginTitle);

// Formulario de inicio de sesión
let loginForm = document.createElement("form");
loginForm.id = "login";

// Etiqueta y campo de correo electrónico para el login
const loginEmailLabel = document.createElement("label");
loginEmailLabel.htmlFor = "login-email";
loginEmailLabel.innerText = "Correo Electrónico";
loginForm.appendChild(loginEmailLabel);

const loginEmailInput = document.createElement("input");
loginEmailInput.type = "email";
loginEmailInput.id = "login-email";
loginEmailInput.name = "email";
loginEmailInput.placeholder = "Introduce tu correo";
loginEmailInput.required = true;
loginForm.appendChild(loginEmailInput);

// Etiqueta y campo de contraseña para el login
const loginPasswordLabel = document.createElement("label");
loginPasswordLabel.htmlFor = "login-password";
loginPasswordLabel.innerText = "Contraseña";
loginForm.appendChild(loginPasswordLabel);

const loginPasswordInput = document.createElement("input");
loginPasswordInput.type = "password";
loginPasswordInput.id = "login-password";
loginPasswordInput.name = "password";
loginPasswordInput.placeholder = "Introduce tu contraseña";
loginPasswordInput.required = true;
loginForm.appendChild(loginPasswordInput);

// Botón de inicio de sesión
const loginButton = document.createElement("button");
loginButton.type = "submit";
loginButton.innerText = "Iniciar Sesión";
loginForm.appendChild(loginButton);

loginFormContainer.appendChild(loginForm);

// Enlace a registro
const registerLinkParagraph = document.createElement("p");
registerLinkParagraph.innerHTML = '¿No tienes una cuenta? <a href="#" id="show-register">Regístrate aquí</a>';
loginFormContainer.appendChild(registerLinkParagraph);

// Crear contenedor de formulario de registro
const registerFormContainer = document.createElement("div");
registerFormContainer.id = "register-form";
registerFormContainer.className = "form-container";
registerFormContainer.style.display = "none";

// Título de registro
const registerTitle = document.createElement("h2");
registerTitle.innerText = "Registro";
registerFormContainer.appendChild(registerTitle);

// Formulario de registro
let registerForm = document.createElement("form");
registerForm.id = "register";

// Etiqueta y campo de correo electrónico para el registro
const registerEmailLabel = document.createElement("label");
registerEmailLabel.htmlFor = "register-email";
registerEmailLabel.innerText = "Correo Electrónico";
registerForm.appendChild(registerEmailLabel);

const registerEmailInput = document.createElement("input");
registerEmailInput.type = "email";
registerEmailInput.id = "register-email";
registerEmailInput.name = "email";
registerEmailInput.placeholder = "Escribe tu correo";
registerEmailInput.required = true;
registerForm.appendChild(registerEmailInput);

// Etiqueta y campo de contraseña para el registro
const registerPasswordLabel = document.createElement("label");
registerPasswordLabel.htmlFor = "register-password";
registerPasswordLabel.innerText = "Contraseña";
registerForm.appendChild(registerPasswordLabel);

const registerPasswordInput = document.createElement("input");
registerPasswordInput.type = "password";
registerPasswordInput.id = "register-password";
registerPasswordInput.name = "password";
registerPasswordInput.placeholder = "Escribe tu contraseña";
registerPasswordInput.required = true;
registerForm.appendChild(registerPasswordInput);

// Etiqueta y campo de confirmación de contraseña
const registerPasswordConfirmLabel = document.createElement("label");
registerPasswordConfirmLabel.htmlFor = "register-password-confirm";
registerPasswordConfirmLabel.innerText = "Confirma tu contraseña";
registerForm.appendChild(registerPasswordConfirmLabel);

const registerPasswordConfirmInput = document.createElement("input");
registerPasswordConfirmInput.type = "password";
registerPasswordConfirmInput.id = "register-password-confirm";
registerPasswordConfirmInput.name = "passwordConfirm";
registerPasswordConfirmInput.placeholder = "Repite tu contraseña";
registerPasswordConfirmInput.required = true;
registerForm.appendChild(registerPasswordConfirmInput);

// Botón de registro
const registerButton = document.createElement("button");
registerButton.type = "submit";
registerButton.innerText = "Registrarse";
registerForm.appendChild(registerButton);

registerFormContainer.appendChild(registerForm);

// Enlace a inicio de sesión
const loginLinkParagraph = document.createElement("p");
loginLinkParagraph.innerHTML = '¿Ya tienes una cuenta? <a href="#" id="show-login">Inicia sesión aquí</a>';
registerFormContainer.appendChild(loginLinkParagraph);

// Añadir los formularios al contenedor principal
app.appendChild(loginFormContainer);
app.appendChild(registerFormContainer);
// Elementos del DOM
 loginForm = document.getElementById('login-form');
 registerForm = document.getElementById('register-form');
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

  const name = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  //mirar el puerto que tiene el localhost pa ponerlo en el fetch <3
  try {
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Inicio de sesión exitoso');
      console.log('Datos del usuario:', data);
      
    loginForm.remove()
    registerForm.remove()
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

  const name = document.getElementById('register-email').value;
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
      body: JSON.stringify({ name, password}),
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

// css para el nav
const style = document.createElement('style');
style.textContent = `
  /* Estilos para Modo Claro */
  body.light-mode {
    background-color: white;
    color: black;
  }

  /* Estilos para Modo Oscuro */
  body.dark-mode {
    background-color: black;
    color: white;
  }

  /* Estilos para el nav */
  nav {
    background-color: #f8f9fa;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 1rem;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  nav ul li button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  nav ul li button:hover {
    background-color: #0056b3;
  }
`;
document.head.appendChild(style);

//Modos claro y oscuro

const nav = document.createElement('nav');
nav.innerHTML = `
  <ul>
    <li><button id="light-mode">Modo Claro</button></li>
    <li><button id="dark-mode">Modo Oscuro</button></li>
  </ul>
`;
document.body.prepend(nav);

const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');

lightModeButton.addEventListener('click', () => {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');

});

darkModeButton.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
});
}