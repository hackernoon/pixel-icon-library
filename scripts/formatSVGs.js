const fs = require('fs');
const path = require('path');

const nodeModulesIconsDir = path.join(__dirname, '../node_modules/@hackernoon/pixel-icon-library/icons/SVG');
const assetsIconsDir = path.join(__dirname, '../assets/icons/SVG');

function formatSVGContent(svgContent, iconName) {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const svgTagStart = `<svg id="${iconName}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">`;

    // Check if the SVG content already has the correct format
    if (svgContent.startsWith(xmlHeader) && svgContent.includes(svgTagStart)) {
        // Even if it has the correct format, we still need to clean up fill attributes
        let cleanedContent = svgContent;
        
        // Remove fill="black" attributes from path elements
        cleanedContent = cleanedContent.replace(/\s+fill="black"/g, '');
        
        // Remove fill="none" attributes from anywhere
        cleanedContent = cleanedContent.replace(/\s+fill="none"/g, '');
        
        // Remove problematic background elements that cause white squares
        cleanedContent = cleanedContent.replace(/<g id="BG_copy_\d+">\s*<rect width="24" height="24"[^>]*\/?\s*>\s*<\/g>/g, '');
        
        return cleanedContent;
    }

    // Extract the content inside the <svg> tag
    const svgBodyMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    if (!svgBodyMatch) {
        console.error(`Invalid SVG format for icon: ${iconName}`);
        return null;
    }

    let svgBody = svgBodyMatch[1].trim();
    
    // Clean up the SVG body content
    // Remove fill="black" attributes from path elements
    svgBody = svgBody.replace(/\s+fill="black"/g, '');
    
    // Remove fill="none" attributes from anywhere
    svgBody = svgBody.replace(/\s+fill="none"/g, '');
    
    // Remove problematic background elements that cause white squares
    svgBody = svgBody.replace(/<g id="BG_copy_\d+">\s*<rect width="24" height="24"[^>]*\/?\s*>\s*<\/g>/g, '');
    
    // Remove carriage returns and normalize whitespace
    svgBody = svgBody.replace(/\r\n/g, '').replace(/\r/g, '').replace(/\n/g, '');
    
    return `${xmlHeader}${svgTagStart}${svgBody}</svg>`;
}

function processSVGFiles(dir, dirName) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach(file => {
        if (file.isDirectory()) {
            processSVGFiles(path.join(dir, file.name), dirName);
        } else if (file.name.endsWith('.svg')) {
            const filePath = path.join(dir, file.name);
            const iconName = path.basename(file.name, '.svg');
            const svgContent = fs.readFileSync(filePath, 'utf8');
            const formattedSVG = formatSVGContent(svgContent, iconName);

            if (formattedSVG) {
                fs.writeFileSync(filePath, formattedSVG, 'utf8');
                console.log(`Formatted SVG for icon: ${iconName} (${dirName})`);
            }
        }
    });
}

console.log('Processing node_modules icons...');
processSVGFiles(nodeModulesIconsDir, 'node_modules');

console.log('\nProcessing assets icons...');
processSVGFiles(assetsIconsDir, 'assets');