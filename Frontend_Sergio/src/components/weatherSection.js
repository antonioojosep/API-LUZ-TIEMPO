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

    // Contenedor para el formulario
    const chartTitleContainer = document.createElement('div');
    chartTitleContainer.style.backgroundColor = '#d3d3d3';
    chartTitleContainer.style.padding = '10px';
    chartTitleContainer.style.marginBottom = '20px';

    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.justifyContent = 'center';
    form.style.alignItems = 'center';
    form.style.gap = '10px';

    // Campo de texto para la ciudad
    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.placeholder = 'Ciudad';
    cityInput.style.padding = '10px';
    cityInput.style.fontSize = '16px';
    cityInput.style.border = '2px solid #888';
    cityInput.style.borderRadius = '5px';
    cityInput.style.width = '200px';

    // Botón para buscar
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

    form.appendChild(cityInput);
    form.appendChild(searchButton);
    chartTitleContainer.appendChild(form);

    container.appendChild(separator);
    main.appendChild(chartTitleContainer);
    container.appendChild(main);
};

export default renderWeatherSection;
