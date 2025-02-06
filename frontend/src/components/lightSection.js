
const renderLightSection = (container) => {
    const url = import.meta.env.VITE_API_URL;
    const main = document.createElement('main');
    main.style.backgroundColor = '#d3d3d3';
    main.style.padding = '20px';
    main.style.textAlign = 'center';
    main.style.marginBottom = '20px';

    const separator = document.createElement('hr');
    separator.style.border = '1px solid black';
    separator.style.margin = '20px 0';

    const chartTitleContainer = document.createElement('div');
    chartTitleContainer.style.backgroundColor = '#d3d3d3';
    chartTitleContainer.style.padding = '10px';
    chartTitleContainer.style.marginBottom = '20px';

    const chartTitle = document.createElement('h2');
    chartTitle.textContent = 'Precio de la Luz y horas';
    chartTitle.style.marginBottom = '10px';
    chartTitle.style.fontWeight = 'bold';
    chartTitle.style.backgroundColor = '#888';
    chartTitle.style.padding = '30px';

    chartTitleContainer.appendChild(chartTitle);

    const formContainer = document.createElement('div');
    formContainer.style.marginBottom = '20px';

    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.justifyContent = 'center';
    form.style.alignItems = 'center';
    form.style.gap = '10px';

    const dayInput = document.createElement('input');
    dayInput.type = 'date';
    dayInput.placeholder = 'Selecciona un día';
    dayInput.style.padding = '10px';
    dayInput.style.border = '2px solid #888';
    dayInput.style.borderRadius = '5px';

    const startTimeInput = document.createElement('input');
    startTimeInput.type = 'time';
    startTimeInput.placeholder = 'Hora de inicio';
    startTimeInput.style.padding = '10px';
    startTimeInput.style.border = '2px solid #888';
    startTimeInput.style.borderRadius = '5px';

    const endTimeInput = document.createElement('input');
    endTimeInput.type = 'time';
    endTimeInput.placeholder = 'Hora de fin';
    endTimeInput.style.padding = '10px';
    endTimeInput.style.border = '2px solid #888';
    endTimeInput.style.borderRadius = '5px';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Consultar precios';
    submitButton.style.backgroundColor = '#888';
    submitButton.style.color = 'white';
    submitButton.style.padding = '10px 20px';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';

    form.appendChild(dayInput);
    form.appendChild(startTimeInput);
    form.appendChild(endTimeInput);
    form.appendChild(submitButton);

    formContainer.appendChild(form);

    const chartContainer = document.createElement('div');
    chartContainer.style.backgroundColor = '#888';
    chartContainer.style.padding = '30px';

    const chart = document.createElement('div');
    chart.style.display = 'flex';
    chart.style.justifyContent = 'space-evenly';
    chart.style.alignItems = 'flex-end';
    chart.style.height = '200px';
    chart.style.padding = '20px';

    const fetchData = async (day, startTime, endTime) => {
            const date = new Date(day).getDate();
            const urlFinal = `${url}/days/filter?hourStart=${startTime}&hourEnd=${endTime}&firstDate=${date}&lastDate=${date}`;

        try {
            const response = await fetch(urlFinal);
            const data = await response.json();
    
            const dataValues = data.map(day => day.price);
    
            chart.innerHTML = '';

            dataValues.forEach(value => {
                const bar = document.createElement('div');
                bar.style.width = '40px';
                bar.style.height = `${value/20}px`;
                bar.style.backgroundColor = '#b33';
                chart.appendChild(bar);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            chart.innerHTML = `<p>Error al obtener los datos:</p>`;
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const day = dayInput.value;
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;

        if (day && startTime && endTime) {
            fetchData(day, startTime, endTime);
        } else {
            chart.innerHTML = '<p>Por favor, completa todos los campos.</p>';
        }
    });

    chartContainer.appendChild(chart);
    container.appendChild(separator);
    main.appendChild(chartTitleContainer);
    main.appendChild(formContainer);
    main.appendChild(chartContainer);
    container.appendChild(main);
};

export default renderLightSection;
