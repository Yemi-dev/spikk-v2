import { GetServerSideProps } from "next";

const SITE_URL = "https://spikk.com";

function generateSiteMap(pages: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${`${SITE_URL}${page}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>${page === "/" ? "1.0" : "0.8"}</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will handle the XML generation
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Define all your pages here
  const pages = [
    "/",
    "/marketplace",
    "/marketplace/category",
    "/cart",
    "/careers",
    "/vendors",
    "/vendors/blogs",
    "/home",
  ];

  // Generate the XML sitemap
  const sitemap = generateSiteMap(pages);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
