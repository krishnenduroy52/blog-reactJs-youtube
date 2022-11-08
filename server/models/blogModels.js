const mongoose = require("mongoose");

const blogSchema = {
    title: String,
    date: String,
    dics: String,
}

const mainBlog = mongoose.model("mainBlog", blogSchema)
module.exports = mainBlog;