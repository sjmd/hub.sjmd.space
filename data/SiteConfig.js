const config = {
  siteTitle: "The Hub | Social Justice, Minus Dogma", // Site title.
  siteTitleShort: "SJMD Hub", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Social Justice, Minus Dogma Hub", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://hub.sjmd.space", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Charting paths toward living social justice. Articles, essays, resources, lesson plans, and perspectives.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1XXXXXXXXXXX9", // FB Application ID for using app insights
  googleAnalyticsID: "MM-XXXXXXXX-1", // GA tracking ID.
  disqusShortname: "gatsby-airtable-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  copyright: "Copyright © 2019", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#67c2e7", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
