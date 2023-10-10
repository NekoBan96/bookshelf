const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

exports.run = async function(body) {
    try {
        debugger
        await mongoClient.connect();
        const db = mongoClient.db("MangaBook");
        const collection = db.collection("mangas");
        const data = {titleName: body.titleName, titleAltName: body.titleAltName, description: body.description};
        const result = await collection.insertOne(data);
        console.log(result);
        console.log(data);
        return Promise.resolve('success');
    }catch(err) {
        throw(err)
    }
  }