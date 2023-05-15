import mongoose from 'mongoose';

export class MongoConnection {
    public versions = '^7';
    public database!: typeof mongoose;

    async onStart() {
        this.database = await mongoose.connect(process.env.database!);

        if (this.database) {
            console.log('Connected to MongoDB database');

            return true;
        }
    }
}

export default new MongoConnection();