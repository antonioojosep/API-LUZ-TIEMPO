import renderWeatherSection from "./weatherSection.js";
import renderLightSection from "./lightSection.js";
import renderFooter from "./footer.js";

const renderNavBar = (container) => {
    const navBar = document.createElement('nav');
    navBar.style.display = 'flex';
    navBar.style.flexDirection = 'column';
    navBar.style.alignItems = 'center';
    navBar.style.marginBottom = '20px';

    const title = document.createElement('h1');
    title.textContent = 'API Luz Tiempo';
    title.style.textAlign = 'center';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '50px';

    const headerDiv = document.createElement('div');
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'center';
    headerDiv.style.gap = '20px';
    headerDiv.style.marginBottom = '20px';
    headerDiv.style.width = '100%';

    const logo = document.createElement('div');
    logo.style.backgroundColor = '#888';
    logo.style.display = 'flex';
    logo.style.alignItems = 'center';
    logo.style.justifyContent = 'center';
    logo.style.width = '100px';
    logo.style.height = '100px';

    const img = document.createElement('img');
    img.src = '/img/light-bulb.png';
    img.alt = 'Logo';
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    logo.appendChild(img);

    const btnLuz = document.createElement('button');
    btnLuz.textContent = 'Luz';
    btnLuz.style.backgroundColor = '#888';
    btnLuz.style.color = 'white';
    btnLuz.style.width = '100px';
    btnLuz.style.height = '100px';
    btnLuz.style.border = 'none';
    btnLuz.style.display = 'flex';
    btnLuz.style.alignItems = 'center';
    btnLuz.style.justifyContent = 'center';

    const btnTiempo = document.createElement('button');
    btnTiempo.textContent = 'Tiempo';
    btnTiempo.style.backgroundColor = '#888';
    btnTiempo.style.color = 'white';
    btnTiempo.style.width = '100px';
    btnTiempo.style.height = '100px';
    btnTiempo.style.border = 'none';
    btnTiempo.style.display = 'flex';
    btnTiempo.style.alignItems = 'center';
    btnTiempo.style.justifyContent = 'center';

    headerDiv.appendChild(logo);
    headerDiv.appendChild(btnLuz);
    headerDiv.appendChild(btnTiempo);

    navBar.appendChild(title);
    navBar.appendChild(headerDiv);
    container.appendChild(navBar);

    btnLuz.addEventListener('click', () => {
        const mainContainer = document.getElementById('main-container');
        mainContainer.innerHTML = '';
        renderLightSection(mainContainer);
        renderFooter(mainContainer);
    });

    btnTiempo.addEventListener('click', () => {
        const mainContainer = document.getElementById('main-container');
        mainContainer.innerHTML = '';
        renderWeatherSection(mainContainer);
        renderFooter(mainContainer);
    });
};

export default renderNavBar;
