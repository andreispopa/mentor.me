import mongoose, { Schema } from 'mongoose';

const availabilitySchema = new Schema({
    userId: String,
    date: Date,
    times: [String],
});

export const DateAvailability = mongoose.model(
    'Availability',
    availabilitySchema
);
