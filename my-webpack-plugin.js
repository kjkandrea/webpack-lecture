class MyWebpackPlugin {
  apply(complier) {
    complier.hooks.done.tap('My Webpack Plugin', stats => {
      console.log('My Webpack Plugin : done')
    })
  }
}

module.exports = MyWebpackPlugin
