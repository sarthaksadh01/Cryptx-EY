const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var json2xls = require('json2xls');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(json2xls.middleware);

var port = process.env.PORT || 3000;


app.get('/download', function (req, res) {
  res.download('./output/output.xlsx');
});

app.post("/demo", (req, res) => {

  var reportPath = req.files.report.path;
  var dlPath = req.files.dl.path;
  var vehiclePath = req.files.vehicle.path;
  var pancard = req.files.pancard.path
  var dataPath = req.files.data.path;

  extractData(reportPath, vehiclePath, dlPath, pancard).then((data) => {
    compareData(dataPath, data).then((result) => {
      res.json(result);
    }).catch((e) => {
      res.json(e)
    })

  }).catch((e) => {
    res.json(e)
  })

});





app.listen(port,()=>{
  console.log(`app running on port ${port}`)
})