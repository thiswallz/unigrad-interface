// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");

const postcssPlugins = [tailwind()];

module.exports = {
  siteName: "UniGrad",
  titleTemplate: "%s",
  plugins: [
    {
      use: "gridsome-plugin-typescript",
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  },
};
