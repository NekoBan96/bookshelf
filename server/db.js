const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

exports.add = async function(body) {
    try {
        date = Date.now()
        await mongoClient.connect();
        const db = mongoClient.db("MangaBook");
        const collection = db.collection("mangas");
        const data = {titleName: body.titleName, titleAltName: body.titleAltName, description: body.description, genres: body.genres};
        const result = await collection.insertOne(data);
        console.log(result);
        console.log(data);
        return Promise.resolve('success');
    }catch(err) {
        throw(err)
    }
  }

  exports.recent = async function(count, skip) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("MangaBook");
        const collection = db.collection("mangas");
        result = await collection.find({}).sort({_id:-1}).skip(skip).limit(count).toArray()
        console.log(result);
        return Promise.resolve(result);
    } catch(err) {throw (err)}
  }

exports.searchByName = async function (searchObj, limit) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("MangaBook");
        const collection = db.collection("mangas");
        result1 = await collection.find({titleName: new RegExp(`.*${searchObj}.*`, "gmui")}).limit(limit).toArray()
        result2 = await collection.find({titleAltName: new RegExp(`.*${searchObj}.*`, "gmui")}).limit(limit).toArray()
        console.log(result1, result2);
        return Promise.resolve({result1, result2});
    } catch(err) {throw (err)}
}