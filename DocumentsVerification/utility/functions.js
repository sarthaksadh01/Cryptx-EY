var stateCode = require('../dataset/statecode.json')
function panVerification(panNumber) {

    var accuracy = 0;
    panNumber = panNumber.trim().replace(/[\W_]+/g, "").toLowerCase();
    if (panNumber.length == 10)
        accuracy += 1;

    try {
        if (/^[A-Za-z]+$/.test(panNumber.substring(0, 3)))
            accuracy += 1;
    }
    catch (err) {

    }

    try {
        if (panNumber[3] == 'c' || panNumber[3] == 'p' || panNumber[3] == 'h' || panNumber[3] == 'f' || panNumber[3] == 'a' || panNumber[3] == 't' || panNumber[3] == 'b' || panNumber[3] == 'l' || panNumber[3] == 'j' || panNumber[3] == 'g')
            accuracy += 1;
    }
    catch (err) {

    }

    try {
        if (/^[A-Za-z]+$/.test(panNumber.substring(4, 5)))
            accuracy += 1;
    }
    catch (err) {

    }

    try {

        if (/^\d+$/.test(panNumber.substring(5, 9)))
            accuracy += 1;
    }
    catch (err) {

    }

    try {

        if (/^[A-Za-z]+$/.test(panNumber[9]))
            accuracy += 1;
    }
    catch (err) {

    }


    return (accuracy / 6) * 100;


}

function vehicleNumberVerification(vehicleNumber) {
    var accuracy = 0;
    vehicleNumber = vehicleNumber.trim().replace(/[\W_]+/g, "").toLowerCase();
    if (vehicleNumber.length == 10 || vehicleNumber.length == 9)
        accuracy += 1;
    for (var i = 0; i < stateCode.length; i++) {
        var stateCodeIndex = stateCode[i]["Abbreviation"].toLowerCase();
        try {
            if (stateCodeIndex == vehicleNumber.substring(0, 2)) {
                accuracy += 1;
                break;

            }

        } catch (error) {

        }

    }
    try {
        if (/^\d+$/.test(vehicleNumber.substring(vehicleNumber.length - 4, vehicleNumber.length)))
            accuracy += 1;

    } catch (error) {

    }

    console.log(accuracy);
    return (accuracy / 3) * 100;

}

module.exports = {
    panVerification,
    vehicleNumberVerification
}

