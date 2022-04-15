const View = require("./src/_includes/components/View");
module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("View", View);
  eleventyConfig.addWatchTarget("src/_includes/components");
  eleventyConfig.addPassthroughCopy("src/css/");

  eleventyConfig.addWatchTarget("src/css/");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
