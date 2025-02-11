const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'node_modules/@hackernoon/pixel-icon-library/icons/SVG');
const outputFilePath = path.join(__dirname, 'icons.json');

function getFilesRecursively(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    let fileList = [];

    files.forEach(file => {
        if (file.isDirectory()) {
            fileList = fileList.concat(getFilesRecursively(path.join(dir, file.name)));
        } else if (file.name.endsWith('.svg')) {
            fileList.push(path.join(dir, file.name));
        }
    });

    return fileList;
}

function generateIconsJson() {
    const files = getFilesRecursively(iconsDir);
    const icons = files.map(file => {
        const svgContent = fs.readFileSync(file, 'utf8');
        const iconName = path.basename(file, '.svg');
        const tags = path.relative(iconsDir, path.dirname(file)).split(path.sep);

        return {
            name: iconName,
            tags: tags,
            svg: svgContent
        };
    });

    const jsonContent = JSON.stringify({ icons }, null, 2);
    fs.writeFileSync(outputFilePath, jsonContent, 'utf8');
    console.log(`Icons JSON generated at ${outputFilePath}`);
}

generateIconsJson();