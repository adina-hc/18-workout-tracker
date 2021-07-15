const router = require("express").Router();
const db = require("../models");

// Goes to last workouts
router.get("/workouts", (req, res) => {
  // db.Workout.find({})
  //   .then((workoutResults) => {
  //     res.json(workoutResults);
  //   })
  //   .catch((err) => {
  //     res.status(400).json(err);
  //   });
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])

    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Goes to add exercise by id
router.put("/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((results) => {
    res.json(results);
  });
});

// Goest to create new workout
router.post("/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Goes to workout range results
router.get("/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    // last seven workouts
    .limit(7)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
