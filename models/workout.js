const mongoose = require('mongoose');
const db = require('../seeders');

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'Type of exercise',
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Name of exercise',
                },
                duration: {
                    type: Number,
                    required: 'Duration of exercise',
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
            },
        ],
    }
);

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;
