const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout")



router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});


router.put("/api/workouts/:id", ({ params, body }, res) => {

    Workout.findByIdAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});


router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
        }
    },
    ])
        .sort({ _id: -1 })
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});


router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
        }
    },
    ])
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router