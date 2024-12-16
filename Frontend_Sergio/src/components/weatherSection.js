
const renderWeatherSection = (container) => {
    const main = document.createElement('main');
    main.style.backgroundColor = '#d3d3d3';
    main.style.padding = '20px';
    main.style.textAlign = 'center';
    main.style.marginBottom = '20px';

    const separator = document.createElement('hr');
    separator.id = 'separator1';
    separator.style.border = '1px solid black';
    separator.style.margin = '20px 0';

    const chartTitleContainer = document.createElement('div');
    chartTitleContainer.style.backgroundColor = '#d3d3d3';
    chartTitleContainer.style.padding = '10px';
    chartTitleContainer.style.marginBottom = '20px';

    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.justifyContent = 'center';
    form.style.alignItems = 'center';
    form.style.gap = '10px';

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.placeholder = 'Ciudad';
    cityInput.style.padding = '10px';
    cityInput.style.fontSize = '16px';
    cityInput.style.border = '2px solid #888';
    cityInput.style.borderRadius = '5px';
    cityInput.style.width = '200px';

    const searchButton = document.createElement('button');
    searchButton.type = 'submit';
    searchButton.textContent = 'Buscar';
    searchButton.style.backgroundColor = '#888';
    searchButton.style.color = 'white';
    searchButton.style.padding = '10px 20px';
    searchButton.style.fontSize = '16px';
    searchButton.style.border = 'none';
    searchButton.style.borderRadius = '5px';
    searchButton.style.cursor = 'pointer';

    const resultContainer = document.createElement('div');
    resultContainer.style.marginTop = '20px';
    resultContainer.style.textAlign = 'center';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const city = cityInput.value.trim();
        if (!city) return;

        // Falta la API Key de OpenWeatherMap
        const apiKey = 'KEY';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === 200) {
                resultContainer.innerHTML = '';

                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                const resultHTML = `
                    <h3>Clima en ${data.name}, ${data.sys.country}</h3>
                    <p>Temperatura: ${temperature}°C</p>
                    <p>Condición: ${description}</p>
                    <p>Humedad: ${humidity}%</p>
                    <p>Velocidad del viento: ${windSpeed} m/s</p>
                `;

                resultContainer.innerHTML = resultHTML;
            } else {
                resultContainer.innerHTML = `<p>No se pudo obtener el clima para la ciudad ${city}.</p>`;
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            resultContainer.innerHTML = '<p>Error al obtener los datos del clima.</p>';
        }
    });

    form.appendChild(cityInput);
    form.appendChild(searchButton);
    chartTitleContainer.appendChild(form);

    container.appendChild(separator);
    main.appendChild(chartTitleContainer);
    main.appendChild(resultContainer);
    container.appendChild(main);
};

export default renderWeatherSection;
