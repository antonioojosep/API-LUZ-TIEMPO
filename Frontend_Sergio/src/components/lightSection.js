const renderLightSection = (container) => {
    const main = document.createElement('main');
    main.style.backgroundColor = '#d3d3d3';
    main.style.padding = '20px';
    main.style.textAlign = 'center';
    main.style.marginBottom = '20px';

    const separator = document.createElement('hr');
    separator.style.border = '1px solid black';
    separator.style.margin = '20px 0';

    // Contenedor para el título
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

    // Contenedor para el gráfico
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
            // API (por ejemplo, para obtener precios de luz o datos relacionados)
            const response = await fetch('https://api.exmaple.com/data'); // Reemplaza con tu URL de API
            const data = await response.json();

            // Suponiendo que la API devuelve un arreglo de valores numéricos
            const dataValues = data.prices || [100, 150, 200, 180, 90]; // Si no hay datos, usamos un arreglo predeterminado

            // Limpiamos el gráfico antes de añadir las nuevas barras
            chart.innerHTML = '';

            // Generar las barras del gráfico con los datos de la API
            dataValues.forEach(value => {
                const bar = document.createElement('div');
                bar.style.width = '40px';
                bar.style.height = `${value}px`;
                bar.style.backgroundColor = '#b33';
                chart.appendChild(bar);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            // Si hay un error, mostrar una barra predeterminada o un mensaje
            chart.innerHTML = '<p>Error al obtener los datos</p>';
        }
    };

    // Llamar a la función para cargar los datos
    fetchData();

    chartContainer.appendChild(chart);
    container.appendChild(separator);
    main.appendChild(chartTitleContainer);
    main.appendChild(chartContainer);
    container.appendChild(main);
};

export default renderLightSection;
