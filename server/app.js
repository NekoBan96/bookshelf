const express = require('express'),
port = '5000',
app = express(),
fs = require('fs'),
path = require('path'),
{ log } = require('console'),
fileUpload = require('express-fileupload'),
zl = require("zip-lib"),
cors = require('cors')
const db = require('./db.js');
//const mangas = require('./controllers/mangas.js');
app.use(cors())
app.use(fileUpload({defCharset: 'utf8', defParamCharset: 'utf8'}));
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use('/static', express.static('./library'));
const fsp = require('node:fs/promises');
const compressing = require('compressing');
//Возможно понадобиться для загрузки больших файлов
// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/"
// }));


app.post('/uploadContent', function(req, res) {
  log("Запрос на выкладывание файлов");
  if (!req.files || Object.keys(req.files).length === 0) //проверкаа наличия файлов
    return res.status(400).send('No files were uploaded.');

  let sampleFile = req.files.file;
  const titleName = req.body.titleName
  const pathRep = path.join(__dirname, 'library', titleName)
  const pathFile = path.join(pathRep, sampleFile.name)

  log('try to add ' + titleName, sampleFile);

  fsp.mkdir(pathRep)
    .then(()=> compressing.zip.uncompress(sampleFile.data, pathRep, {zipFileNameEncoding: 'CP-866'}))
    .then(()=>{
      db.add(req.body).then(result => {res.status(200).send('zaebok')}).catch(err => {throw new Error(err)})
      log('unzip done')
      return fsp.readdir(pathRep)
    })
    .then((namesRep)=>{
      log(namesRep)
      for(const rep of namesRep){
        if (rep == 'logo.jpg')
          continue
        let i = 0;
        const namesPages  = fs.readdirSync(path.join(pathRep, rep))
        namesPages.sort((a, b) => parseInt(a.replace(/[^0-9]/, '')) - parseInt(b.replace(/[^0-9]/, '')))
        console.log(namesPages);  
        for (const page of namesPages){
          i++
          ((j)=>{
            fsp.rename(path.join(pathRep, rep, page), path.join(pathRep, rep, `${j}.png`), err => {if (err) throw err})
          })(i)
          
        }
      }
    }).catch(err => log(err))
   })




app.get('/db/recentAdded/', function (req, res) {
  start = Number(req.query.s);
  end = Number(req.query.e);
  countTitles = end - start;
  db.recent(countTitles, start).then (result => {res.send(result)}, err => {throw new Error(err)})
})

app.get('/db/search/:search/:limit/', function (req, res) {
  limit = Number(req.params["limit"] || 0);
  search = req.params["search"];
  db.searchByName(search, limit).then (result => {res.send({result1, result2})}, err => {throw new Error(err)})
})
app.get('/db/getById/:id', function (req, res) {
  id = req.params["id"];
  db.getById(id).then (result => {
    pathRep = path.join(__dirname, "library", result.titleName)
    const chapters = fs.readdirSync(pathRep)
    let chaptersArray = []
    for(const chapter of chapters){
      if (chapter == 'logo.jpg')
        continue
      const pages = fs.readdirSync(path.join(pathRep, chapter))
      chaptersArray.push({name: chapter, pages: pages.length})

    }
    result.chapters = chaptersArray
    res.send(result)
  }, err => {throw new Error(err)})

})

app.get('/db/searchGenre', function (req, res) {
  res.send('иди нахуй')
})

app.listen(port, function () {
    console.log(`server listen: http://${port}`);
});