import mongoose, { Schema } from 'mongoose';

export const RequestSchema = new Schema({
    sender: String,
    receiver: String,
    status: String,
});

export const Request = mongoose.model('Request', RequestSchema);
