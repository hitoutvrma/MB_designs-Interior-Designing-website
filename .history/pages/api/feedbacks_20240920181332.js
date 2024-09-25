import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://hitesh126verma:qLVIyPRHzs7oa8CL@bitcheat.kjnuf4s.mongodb.net/yd?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await client.connect();
            const database = client.db('yd'); // Replace with your database name
            const collection = database.collection('contact');

            const feedbacks = await collection.find({}, { projection: { _id: 0 } }).toArray();
            return res.status(200).json(feedbacks);
        } catch (error) {
            return res.status(500).json({ error: "Something went wrong." });
        } finally {
            await client.close();
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
