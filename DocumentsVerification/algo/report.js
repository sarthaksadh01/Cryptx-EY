var upload = require("../image_manipulation/upload").uploadImage
var ocr = require("../image_manipulation/ocr").extractText
var makers = require('../dataset/carBrands.json')
var types = require('../dataset/carType.json')
async function report(file) {
    return new Promise((resolve, reject) => {
        upload(file).then((link) => {
            ocr(link).then((textFromReport) => {
                console.log(textFromReport)
                var claimNumber='';
                var engineNumber = [];
                var make = [];
                var type = [];

                // engine number

                var textAnnotationsWithoutSpaces = textFromReport.trim().replace(/[\W_]+/g, "");
                reportText = textAnnotationsWithoutSpaces;
                var regex1 = /^[A-Z0-9]{6}.*[0-9]{6}$/
                for (var i = 0; i < textAnnotationsWithoutSpaces.length - 12; i++) {
                    if (textAnnotationsWithoutSpaces.substring(i, i + 12).search(regex1) == 0) {
                        engineNumber.push(textAnnotationsWithoutSpaces.substring(i, i + 12));
                    }

                }

                var finalResult = [];
                for (var i = 0; i < engineNumber.length; i++) {
                    if (engineNumber[i].search(/^(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]+$/) == 0) {
                        finalResult.push(engineNumber[i]);

                    }
                }

                engineNumber = finalResult;



                // maker---

                for (var i = 0; i < makers.length; i++) {
                    if (textFromReport.toLowerCase().search(makers[i].Brand.toLowerCase()) > 0) {
                        make.push(makers[i].Brand);
                       
                    }
                }


                //type

                for (var i = 0; i < types.length; i++) {
                    if (textFromReport.toLowerCase().search(types[i].Type.toLowerCase()) > 0) {
                        type.push(types[i].Type);
                        
                    }
                }

                resolve({ claimNumber, engineNumber, make, type });



            }).catch((e) => {
                reject(e);

            })

        }).catch((e) => {
            reject(e);
        })
    })
}


module.exports={
    report
}