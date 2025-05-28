const fs = require("fs");
const data = require("./data.json");

function generateHreflangSitemap(pairs) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  pairs.forEach(pair => {
    xml += `  <url>\n`;
    xml += `    <loc>${pair.en}</loc>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${pair.en}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="bn" href="${pair.bn}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${pair.bn}" />\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

const sitemap = generateHreflangSitemap(data);
fs.writeFileSync("hreflang-sitemap.xml", sitemap, "utf-8");

console.log("✅ Sitemap তৈরি হয়েছে!");

