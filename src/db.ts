import { MongoClient, Db } from 'mongodb';

const uri = 'mongodb+srv://root:Pa$$w0rd@cluster0.ruxxqzc.mongodb.net';


let db: Db;

export async function connectDB(): Promise<void> {
  const client = new MongoClient(uri);
  await client.connect();
  db = client.db('myapp');
  console.log('MongoDB connected');
}
 export function getDB(): Db {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
}
