import mongoose, { Schema } from 'mongoose';

const GuildSchema = new Schema({
    GuildID: { type: String, required: true },
    Premium: { type: Boolean, required: true },
});

const GuildModel = mongoose.model("Guild", GuildSchema);

export { GuildModel };