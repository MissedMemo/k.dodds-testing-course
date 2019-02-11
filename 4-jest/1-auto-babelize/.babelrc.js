const isTest = String( process.env.NODE_ENV === "test" )

module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "loose": true,
      "modules": isTest ? 'commonjs' : false
    }]
  ]
}