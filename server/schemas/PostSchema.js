const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    post_title: {
        type: String,
        required: true
    },
    post_body: {
        type: String,
        required: true
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        reqquired: true,
        ref: "Tag"
    }
});

const PostModel = mongoose.model("Post", PostSchema, "posts");

module.exports = PostModel;

