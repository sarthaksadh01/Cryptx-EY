var azure = require('azure-storage');
const config = require("../config/config");
var fileService = azure.createFileService(config.storageName,config.storageKey);

fileService.createFileFromLocalFile('taskshare', 'taskdirectory', 'taskfile', '/Users/sarthaksadh/Desktop/cryptx-mishmash/DocumentsVerification/testData/c.jpg', function(error, result, response) {
    console.log(response);
    console.log(error);
    if (!error) {
      // file uploaded
    }
  });