const cloud = require('wx-server-sdk')
var request = require('request');
// 初始化 cloud
cloud.init()
exports.main = async (event, context) => new Promise((resolve, reject) => {
  request('https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(JSON.parse(body))
      }
      resolve(null)
    });
})