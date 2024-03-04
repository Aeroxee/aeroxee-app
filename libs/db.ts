import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `${process.env.MONGO_URL}`;

export const ClientDB = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});
