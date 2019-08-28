exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    console.log('loaders', loaders);
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /scrollmagic/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
}