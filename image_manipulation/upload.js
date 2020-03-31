var cloudinary = require('cloudinary').v2;
var config = require("../config/config")
cloudinary.config(config.cloudinaryDetails);
async function uploadImage(file) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file, function (error, result) {
            if (error) {
                reject(error)
            }
            resolve(result.secure_url);


        });

    })

}
module.exports = {
    uploadImage
}