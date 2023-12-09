import {MongoClient, ObjectId} from 'mongodb'
import * as dotenv from 'dotenv'

dotenv.config()

export type ProductType = {
    title: string
    _id?: ObjectId
}

// Connection URL
const url = process.env.MONGO_URL || "mongodb://localhost:5000"

console.log('url :', url)

if (!url) {
    throw new Error('❗ Url doesn\'t found')
}
const client = new MongoClient(url);

export const productCollection = client.db().collection<ProductType>('products');

export const runDb = async () => {
    try {
        await client.connect();
        console.log('👌 Connected successfully to server');
    } catch (e) {
        console.log('🤷 Don\'t connected successfully to server');
        await client.close()
    }
};


