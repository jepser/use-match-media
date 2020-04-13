module.exports = {
  modules: {
    rules: [{
      test: /\.md$/,
      use: [
        {
          loader: 'markdown-loader'
        }
      ]
    }]
  }
}
