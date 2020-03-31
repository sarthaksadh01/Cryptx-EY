var upload = require("../image_manipulation/upload").uploadImage
var ocr = require("../image_manipulation/ocr").extractText
var panVerification = require("../utility/functions").panVerification
async function pancard(file) {
    return new Promise((resolve, reject) => {
        upload(file).then((link) => {
            ocr(link).then((textFromPanCard) => {
                var accuracy = 0;
                var panNumber = "";
                for (var i = 0; i < textFromPanCard.length; i++) {
                    var tempaAcc = panVerification(textFromPanCard.substr(i, 10));
                    if (tempaAcc > accuracy) {
                        accuracy = tempaAcc;
                        panNumber = textFromPanCard.substr(i, 10);
                    }
                }
                resolve({ value: panNumber, accuracy: accuracy })

            }).catch((e) => {
                reject(e);

            })

        }).catch((e) => {
            reject(e);

        })
    })
}


module.exports = {
    pancard
}