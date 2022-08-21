
const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());

//name: User
//pass: a6HdphA2VhzRHRYQ

app.get('/', (req, res) => {
  res.send('Hello World!')
})




const uri = "mongodb+srv://User:a6HdphA2VhzRHRYQ@cluster0.gqda5x7.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run (){
    try{
        await client.connect();
        const coursesCollection = client.db('Service').collection('courses');
        app.get('/users', async(req, res) =>{
            const query = {};
          const cursor = coursesCollection.find(query);
          const course = await cursor.toArray();
          res.send(course);
          });

    }
    finally{

    }
    run().catch(console.dir);
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})