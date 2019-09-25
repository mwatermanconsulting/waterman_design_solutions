require("babel-register")({
  presets: ["es2015", "react"]
});
 
const router = require("/Github/waterman_creative_solutions/wds_website/src/Components/main").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://www.watermandesignsolutions.com")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();