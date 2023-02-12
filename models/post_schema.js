const mongoose = require('mongoose')


let post = {
    post_url: "sdlfjsfd.jpeg",
    caption: "learn a bit and do it again",
    created_at: "45545488553",
    location: "coimbatore"
}

const Postschema = new mongoose.Schema({
    post_url: { type: String, required: true },
    caption: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },
    location: { type: String, required: true }
})


const Post = mongoose.model("Post", Postschema)

module.exports = Post;