var upload = require("../image_manipulation/upload").uploadImage
var ocr = require("../image_manipulation/ocr").extractText
var vehicleNumberVerification = require("../utility/functions").vehicleNumberVerification
async function vehicle(file) {
    return new Promise((resolve, reject) => {
        upload(file).then((link) => {
            ocr(link).then((textFromVehicle) => {
                var accuracy = 0;
                var vehiclenumber = "";
                for (var i = 0; i < textFromVehicle.length; i++) {
                    var tempAccuracy = vehicleNumberVerification(textFromVehicle.substr(i, 9));
                    if (tempAccuracy >= accuracy) {
                        accuracy = tempAccuracy;
                        vehiclenumber = textFromVehicle.substr(i, 10);
                    }

                }
                for (var i = 0; i < textFromVehicle.length; i++) {
                    var tempAccuracy = vehicleNumberVerification(textFromVehicle.substr(i, 10));
                    if (tempAccuracy >= accuracy) {
                        accuracy = tempAccuracy;
                        vehiclenumber = textFromVehicle.substr(i, 10);
                    }

                }
                resolve({ value: vehiclenumber, accuracy })

            }).catch((e) => {
                reject(e);

            })

        }).catch((e) => {
            reject(e);

        })
    })
}


module.exports = {
    vehicle
}