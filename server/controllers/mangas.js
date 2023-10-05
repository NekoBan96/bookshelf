const path = require('path');
const Manga = require('../models/mangas');

exports.create = function (req, res) {
    var newManga = new Manga(req.body);
    console.log(req.body);
    newManga.save()
        .then(function() {
            res.status(200).send('zaebok')
        })
        .catch(function (err){
            res.status(400).send('Unable to save shark to database');
            console.log(err);
        })
        }