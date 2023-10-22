const { ObjectId } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

exports.add = async function(body) {
    try {
        date = Date.now()
        await mongoClient.connect();
        const db = mongoClient.db("MangaBook");
        const collection = db.collection("mangas");
        const data = {titleName: body.titleName, titleAltName: body.titleAltName, description: body.description, genres: body.genres.split(',')};
        const result = await collection.insertOne(data);
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
        const result = await collection.find({}).sort({_id:-1}).skip(skip).limit(count).toArray()
        console.log(result);
        return Promise.resolve(result);
    } catch(err) {throw (err)}
  }

exports.searchByName = async function (searchObj, limit) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("MangaBook");
        const collection = db.collection("mangas");
        const result1 = await collection.find({titleName: new RegExp(`.*${searchObj}.*`, "gmui")}).limit(limit).toArray()
        const result2 = await collection.find({titleAltName: new RegExp(`.*${searchObj}.*`, "gmui")}).limit(limit).toArray()
        return Promise.resolve({result1, result2});
    } catch(err) {throw (err)}
}

exports.getById = async function (id) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("MangaBook");
        const collection = db.collection("mangas");
        const result = await collection.findOne({"_id": new ObjectId(id)})
        console.log(result);
        return Promise.resolve(result);
    } catch(err) {throw (err)}
}