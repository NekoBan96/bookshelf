exports.run = async function(body) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("MangaBook");
        const collection = db.collection("mangas");
        const user = {titleName: body.titleName, titleAltName: body.titleAltName};
        const result = await collection.insertOne(user);
        console.log(result);
        console.log(user);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
  }