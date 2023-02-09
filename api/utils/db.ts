import { MongoClient } from 'mongodb';

let dbClient: MongoClient;
export async function initDbClient(): Promise<MongoClient> {
  await MongoClient.connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true
  })
    .then((res) => {
      dbClient = res;
    })
    .catch((err) => {
      console.log('Err===>', err);
    });

  // eslint-disable-next-line no-console
  console.log('✔️   Connected to Database', dbClient);
  return dbClient;
}

export async function getDbClient(): Promise<MongoClient> {
  if (!dbClient) {
    await initDbClient();
  }
  return dbClient;
}
