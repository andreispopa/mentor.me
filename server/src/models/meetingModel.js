import mongoose, { Schema } from 'mongoose';

const MeetingSchema = new Schema({
    participant1: [{ type: String, ref: 'User' }],
    participant2: [{ type: String, ref: 'User' }],
    date: Date,
    time: String,
    notes: String,
});

export const Meeting = mongoose.model('Meeting', MeetingSchema);
