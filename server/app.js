const express = require('express'),
port = '5000',
app = express(),
fs = require('fs'),
path = require('path'),
{ log } = require('console'),
fileUpload = require('express-fileupload'),
zl = require("zip-lib"),
cors = require('cors')


app.use(cors())
app.use(fileUpload({
  defCharset: 'utf8',
  defParamCharset: 'utf8'
  }));
//Возможно понадобиться для загрузки больших файлов
// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/"
// }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static('./library'));



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
    })



app.post('/uploadContent', function(req, res) {
  log("Запрос на выкладывание файлов");

  if (!req.files || Object.keys(req.files).length === 0)
    return res.status(400).send('No files were uploaded.');


  let sampleFile = req.files.file;
  const titleName = req.body.titleName
  const pathRep = path.join(__dirname, 'library', titleName)
  const pathFile = path.join(pathRep, sampleFile.name)
  

  log('try to add ' + titleName, sampleFile);

  fs.mkdir(pathRep, () => {
    sampleFile.mv(pathFile, function(err) {
      if (err)
        return res.status(500).send(err);

      try{
        zl.extract(pathFile, pathRep, 'utf8')
          .then(()=> {
            fs.rm(pathFile, () => { 
              log('unzip done')
              res.send("File uploaded successfully")
            })
          }, err=> {
            throw new Error(err)
          })
    } catch(err) {
      log(err)
    }
  });
  })
  
});


app.listen(port, function () {
    console.log(`server listen: http://${port}`);
});