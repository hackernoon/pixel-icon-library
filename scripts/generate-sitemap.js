const fs = require('fs');

fs.readFile('data/icons.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading icons.json:', err);
        return;
    }

    try {
        const icons = JSON.parse(data).icons;
        const baseUrl = 'https://pixeliconlibrary.com';
        
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${baseUrl}/</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>`;

        icons.forEach(icon => {
            sitemap += `
    <url>
        <loc>${baseUrl}/${icon.name}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`;
        });

        sitemap += '\n</urlset>';

        fs.writeFile('/sitemap.xml', sitemap, err => {
            if (err) {
                console.error('Error writing sitemap.xml:', err);
                return;
            }
            console.log('Sitemap generated successfully!');
        });

    } catch (err) {
        console.error('Error parsing icons.json:', err);
    }
});