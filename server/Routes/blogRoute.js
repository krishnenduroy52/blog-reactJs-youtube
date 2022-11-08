const express = require("express")
const router = express.Router();
const mainBlog = require("../models/blogModels")

router.route("/addblog").post(async (req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const dics = req.body.dics;

    const newBlog = new mainBlog({
        title,
        date,
        dics
    })
    await newBlog.save();
})

router.route("/blogs").get(async (req, res) => {
    await mainBlog.find().then((foundBlog) => res.json(foundBlog))
})

router.route("/blogs/:id").delete(async (req, res) => {
    const id = req.params.id;
    await mainBlog.findByIdAndDelete(id, (err, data) => {
        if (err) {
            console.log(err)
            res.status(404).json();
        } else {
            res.status(204).json();
        }

    })
})

router.route("/blogs/:id").put(async (req, res) => {
    console.log("Put")
    await mainBlog.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            res.send("Error");
        }
        else {
            res.send(data);
        }
    })
})

module.exports = router;
