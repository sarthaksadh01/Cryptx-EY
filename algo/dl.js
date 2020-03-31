var upload = require("../image_manipulation/upload").uploadImage
var ocr = require("../image_manipulation/ocr").extractText
async function dlNumber(file) {
    return new Promise((resolve, reject) => {
        upload(file).then((link) => {
            ocr(link).then((textFromDL) => {
                textFromDL = textFromDL.trim().replace(/[\W_]+/g, "");
                console.log(textFromDL)
                var dlNumber = [];
                var accuracy = 0;
                var regex1 = /^[A-Za-z].*[0-9]{13}$/
                for (var i = 0; i < textFromDL.length - 15; i++) {
                    if (textFromDL.substring(i, i + 15).search(regex1) == 0) {
                        dlNumber.push(textFromDL.substring(i, i + 15))
                        accuracy = 100;
                    }

                }
                resolve({ value: dlNumber, accuracy })


            }).catch((e) => {
                reject(e);

            })

        }).catch((e) => {
            reject(e);

        })
    })
}
module.exports={
    dlNumber
}
