const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3002;
require('./file');
app.use(cors());
app.use(bodyParser.json());
// require('dotenv').config();
console.log("wester");
// MongoDB Connection
const mongoPassword = "Rishu%402002";
// process.env.mongoPassword;
mongoose.connect(`mongodb+srv://rishuraj2401:${mongoPassword}@cluster0.twrql.mongodb.net/logs`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("hi"));

// MongoDB Model
const LogMongo = mongoose.model('Log', {
  level: String,
  message: String,
  resourceId: String,
  timestamp: Date,
  traceId: String,
  spanId: String,
  commit: String,
  metadata: {
    parentResourceId: String,
  },
});
app.get("/", async(req,res)=>{
  const result= await LogMongo.find();
  const re= JSON.stringify(result);
  // res.json(result);

  res.send(re);
})
 app.post('/g', async (req, res) => {
  try {
    // Fetch all documents from MongoDB
    const allLogs = await LogMongo.find(req.body);
    res.json(allLogs);
  } catch (error) {
    console.error('Error fetching all logs from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Log Ingestion Route for MongoDB
app.post('/ingest-mongo', async (req, res) => {
  const logData = req.body;

  try {       
    // Ingest log into MongoDB
    await LogMongo.create(logData);

    res.json({ message: 'Log ingested into MongoDB successfully' });
  } catch (error) {
    console.error('Error ingesting log into MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Query Logs Route for MongoDB
app.get('/query', async (req, res) => {
  // Implement MongoDB query logic here
  const param = Object.keys(req.query)[1];
  const x = Object.values(req.query)[1];

  try {
    const mongoQuery = {
      [param]: { $regex: `${x}`, $options: 'i' },
    };

    const mongoResult = await LogMongo.find(mongoQuery).exec();
    res.json(mongoResult);
  } catch (error) {
    console.error('Error searching logs in MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start MongoDB Express Server
app.listen(port, () => {
  console.log(`MongoDB Server is running on http://localhost:${port}`);
});
