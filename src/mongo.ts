import { MongoClient } from 'mongodb';
import 'dotenv/config';

const username = encodeURIComponent('uouProject');
const password = encodeURIComponent(process.env.MONGO_PASSWORD !== undefined && process.env.MONGO_PASSWORD);

const uri = `mongodb+srv://${username}:${password}@cluster0.jv9pc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function main() {
  await client.connect();

  const users = client.db('uou').collection('users');

  await client.close();
}

main();
