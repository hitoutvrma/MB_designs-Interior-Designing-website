import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://hitesh126verma:qLVIyPRHzs7oa8CL@bitcheat.kjnuf4s.mongodb.net/yd?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await client.connect();
            const database = client.db('yd'); // Replace with your database name
            const collection = database.collection('contact');

            const contactData = req.body;
            // Uncomment for validation
            // if (!contactData.first_name || !contactData.last_name || !contactData.email_address || !contactData.message) {
            //     return res.status(400).json({ error: "Invalid input" });
            // }

            await collection.insertOne(contactData);
            return res.status(201).json({ message: "Contact submitted successfully!" });
        } catch (error) {
            return res.status(500).json({ error: "Something went wrong." });
        } finally {
            await client.close();
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
