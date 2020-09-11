const { Appsignal } = require("@appsignal/nodejs")

exports.appsignal = new Appsignal({
  active: true,
  debug: true,
  name: "Express example",
  apiKey: "<KEY>"
})
