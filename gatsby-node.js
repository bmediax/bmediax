exports.onCreateWebpackConfig = ({ stage, getConfig, actions, plugins }) => {
  // Suppress CSS conflict order warnings - https://stackoverflow.com/questions/51971857/mini-css-extract-plugin-warning-in-chunk-chunkname-mini-css-extract-plugin-con
  if (stage === "build-javascript" || stage === "develop") {
    const config = getConfig();

    const miniCss = config.plugins.find(
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
    );

    if (miniCss) {
      miniCss.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);

    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    });
  }
};
