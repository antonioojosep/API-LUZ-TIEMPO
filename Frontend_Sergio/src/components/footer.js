const renderFooter = (container) => {
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#d3d3d3';
    footer.style.padding = '20px';
    footer.style.textAlign = 'center';

    const separator2 = document.createElement('hr');
    separator2.id = 'separator2';
    separator2.style.border = '1px solid black';
    separator2.style.margin = '20px 0';

    const footerText = document.createElement('div');
    footerText.textContent = 'Footer con información';
    footerText.style.fontStyle = 'italic';

    footer.appendChild(footerText);
    container.appendChild(separator2);
    container.appendChild(footer);
};

export default renderFooter;
