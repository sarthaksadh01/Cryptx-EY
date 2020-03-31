var algo = require("../algo/algo")
async function extractData(report, vehicle, dl, pancard) {
    return new Promise((resolve, reject) => {
        var result = {};
        algo.report(report).then((res) => {
            result['report'] = res;
            algo.vehicle(vehicle).then((res) => {
                result['vehicle'] = res;
                algo.dl(dl).then((res) => {
                    result['dl'] = res;
                    algo.pancard(pancard).then((res) => {
                        result['pancard'] = res;
                        resolve(result);
                    }).catch((e) => {
                        reject(e);

                    });
                }).catch((e) => {
                    reject(e);

                });
            }).catch((e) => {
                reject(e);

            });
        }).catch((e) => {
            reject(e);

        })
    })


}
module.exports = {
    extractData
}