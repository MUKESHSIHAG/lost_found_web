const request = require('request')

request({
  url: "http://api.ipinfodb.com/v3/ip-city/?key=91db830ac94923aa7e1316e3b9f1054f268402254a41272eafea22bda7c16fda",
  json: true
}, (error, res, body) => {
    console.log(body)
})
