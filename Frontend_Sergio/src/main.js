import renderNavBar from "./components/navBar.js";
import renderLightSection from "./components/lightSection.js";
import renderWeatherSection from "./components/weatherSection.js";
import renderFooter from "./components/footer.js";

const app = document.getElementById('app');
const container = document.createElement('div');
app.appendChild(container);

renderNavBar(app);

const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
mainContainer.style.width = '100%';
mainContainer.style.maxWidth = '1440px';
mainContainer.style.margin = '0 auto';
mainContainer.style.backgroundColor = '#f8e8e8';
mainContainer.style.padding = '20px';
mainContainer.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
app.appendChild(mainContainer);

renderLightSection(mainContainer);
renderFooter(mainContainer);
