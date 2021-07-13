const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoutineSchema = new Schema({
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
                type: Number,
            },
            repetitions: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            calories: {
                type: Number
            },
        }
    ] 
});

const Routine = mongoose.model("Routine", RoutineSchema);

module.exports = Routine;