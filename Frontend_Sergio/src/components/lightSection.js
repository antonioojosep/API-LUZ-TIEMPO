
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

    const chartContainer = document.createElement('div');
    chartContainer.style.backgroundColor = '#888';
    chartContainer.style.padding = '30px';

    const chart = document.createElement('div');
    chart.style.display = 'flex';
    chart.style.justifyContent = 'space-evenly';
    chart.style.alignItems = 'flex-end';
    chart.style.height = '200px';
    chart.style.padding = '20px';

    const fetchData = async () => {
        try {
            const response = await fetch(`${url}/days`);
            const data = await response.json();
    
            const dataValues = data.map(day => day.price);
    
            chart.innerHTML = '';

            dataValues.forEach(value => {
                const bar = document.createElement('div');
                bar.style.width = '40px';
                bar.style.height = `${value}px`;
                bar.style.backgroundColor = '#b33';
                chart.appendChild(bar);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            chart.innerHTML = '<p>Error al obtener los datos</p>';
        }
    };
    
    fetchData();    

    chartContainer.appendChild(chart);
    container.appendChild(separator);
    main.appendChild(chartTitleContainer);
    main.appendChild(chartContainer);
    container.appendChild(main);
};

export default renderLightSection;
