import { MongoClient } from "mongodb";

const queryString = "mongodb://localhost:27017";
export const client = new MongoClient(queryString);

export async function initDB() {
  try {
    await client.connect();
    console.log("Pinged succesfully from local to learningMongo");
  } catch (error) {
    console.log("error:", error);
  }
}
