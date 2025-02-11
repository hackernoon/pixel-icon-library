const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'node_modules/@hackernoon/pixel-icon-library/icons/SVG');

function formatSVGContent(svgContent, iconName) {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const svgTagStart = `<svg id="${iconName}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">`;

    // Check if the SVG content already has the correct format
    if (svgContent.startsWith(xmlHeader) && svgContent.includes(svgTagStart)) {
        return svgContent; // Already formatted correctly
    }

    // Extract the content inside the <svg> tag
    const svgBodyMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    if (!svgBodyMatch) {
        console.error(`Invalid SVG format for icon: ${iconName}`);
        return null;
    }

    const svgBody = svgBodyMatch[1].trim();
    return `${xmlHeader}${svgTagStart}${svgBody}</svg>`;
}

function processSVGFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach(file => {
        if (file.isDirectory()) {
            processSVGFiles(path.join(dir, file.name));
        } else if (file.name.endsWith('.svg')) {
            const filePath = path.join(dir, file.name);
            const iconName = path.basename(file.name, '.svg');
            const svgContent = fs.readFileSync(filePath, 'utf8');
            const formattedSVG = formatSVGContent(svgContent, iconName);

            if (formattedSVG) {
                fs.writeFileSync(filePath, formattedSVG, 'utf8');
                console.log(`Formatted SVG for icon: ${iconName}`);
            }
        }
    });
}

processSVGFiles(iconsDir);