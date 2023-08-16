const express = require('express'),
port = '5000',
app = express(),
fs = require('fs'),
path = require('path');
const { log } = require('console');
const fileUpload = require('express-fileupload');
const zl = require("zip-lib");
const cors = require('cors')
const multiparty = require('multiparty');




app.use(cors())
app.use(fileUpload({
    defCharset: 'utf8',
    defParamCharset: 'utf8'
  }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/static', express.static('./library'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
    })



app.post('/uploadContent', function(req, res) {
  console.log("Запрос на выкладывание файлов");
  let form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    let {path: tempPath, originalFilename} = files.imageFile[0];
    let newPath = path.join(__dirname, "library", "test", originalFilename)

    fs.readFile(tempPath, (err, data) => {
      // make copy of image to new location
      fs.writeFile(newPath, data, (err) => {
        // delete temp image
        fs.unlink(tempPath, () => {
          res.send("File uploaded to: " + newPath);
        });
      }); 
    }); 
  })
  return
  debugger;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let sampleFile = req.files.file;
  const pathFile = path.join(__dirname, "library", req.body.bookname, sampleFile.name)
  const pathRep = path.join(__dirname, 'library', req.body.bookname)
  console.log('added ' + req.body.bookname);
  log(sampleFile)
  fs.mkdir(pathRep, () => {
    // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(pathFile, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
    try{
        zl.extract(pathFile, pathRep, 'utf8').then(()=> {
          fs.rm(pathFile, ()=>{log('unzip done')})
        }, (err)=>{log(err)})
    }catch(err){log(err)}
  });
  })
  
});


app.listen(port, function () {
    console.log(`server listen: http://${port}`);
});