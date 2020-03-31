const config = require("../config/config")
const request = require('request');
const params = {
  'language': 'en',
  'detectOrientation': 'true',
};

async function extractText(imageUrl) {
  return new Promise((resolve, reject) => {
    const options = {
      uri: config.ocrEndPoints,
      qs: params,
      body: '{"url": ' + '"' + imageUrl + '"}',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': config.subscriptionKey
      }
    };

    request.post(options, (error, response, body) => {
      if (error) {
        reject(error);
      }
      let jsonResponse = JSON.parse(body);
      resolve(toParagraph(jsonResponse));
    });

  })

}

function toParagraph(jsonResponse){
  var res="";
  var i,j,k;
  for(regions of jsonResponse['regions']){
    for(lines of regions['lines']){
      for(words of lines['words']){
        res = res + words['text'];      
      }
    }
  }
  return res;
}

module.exports = {
  extractText
}