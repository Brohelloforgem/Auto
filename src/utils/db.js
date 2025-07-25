// src/utils/db.js

const { MongoClient, ObjectId } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = 'youtube_auto'; // Use your preferred database name here

let cachedClient = null;
let cachedDb = null;

async function connectToDb() {
  if (cachedDb) return cachedDb;
  if (!uri) throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  if (!cachedClient) {
    cachedClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await cachedClient.connect();
  }
  cachedDb = cachedClient.db(dbName);
  return cachedDb;
}

const Schedule = {
  async find(query = {}) {
    const db = await connectToDb();
    return db.collection('schedule').find(query).sort({ schedule: -1 }).toArray();
  },
  async add(item) {
    const db = await connectToDb();
    return db.collection('schedule').insertOne(item);
  },
  async update(id, data) {
    const db = await connectToDb();
    return db.collection('schedule').updateOne({ _id: new ObjectId(id) }, { $set: data });
  },
  async remove(id) {
    const db = await connectToDb();
    return db.collection('schedule').deleteOne({ _id: new ObjectId(id) });
  },
  async getById(id) {
    const db = await connectToDb();
    return db.collection('schedule').findOne({ _id: new ObjectId(id) });
  }
};

module.exports = {
  connectToDb,
  Schedule
};
