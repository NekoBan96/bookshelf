const { log } = require('console');

const express = require('express'),
port = '5000',
host = '192.168.2.21',
app = express(),
fs = require('fs'),
path = require('path');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({    
  extended: true
}));

app.use('/static', express.static('./library'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
    })
app.post('/file', (req, res)=> {
    console.log(req.body);
    bookpath = path.join(__dirname, "library", req.body.bookname)
    fs.mkdir(bookpath, (err) => {
        if (err) {console.log(err); return}
        fs.readFile(req.body.file, (err, data) => {
            if (err) {console.log(err); return}
            console.log(req.body.file);
            fs.writeFile(path.join(bookpath, 'piski.jpg'), data)
        })
    } )
})


app.listen(port, function () {
    console.log(`server listen: http://${port}`);
});