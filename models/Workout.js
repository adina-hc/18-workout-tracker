// Import mongoose
const mongoose = require('mongoose');

// Define Schema
const Schema = mongoose.Schema;

// Fields
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "You must enter the name of the exercise"
            },
            type: {
                type: String,
                trim: true,
                required: "You must enter the type of exercise"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ] 
});

// Export to use in server
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;