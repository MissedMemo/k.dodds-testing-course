const isTest = String( process.env.NODE_ENV === 'test' )

module.exports = {
  presets: [
    "@babel/preset-react",
    [ "@babel/preset-env", {
      modules: isTest ? 'commonjs': false,
      loose: true
    }]
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties"
  ]
}