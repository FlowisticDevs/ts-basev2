import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true }
});

const UserModel = mongoose.model("UserModel", UserSchema);
export { UserModel };