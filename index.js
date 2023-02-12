const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const URL = "mongodb+srv://mythilymuthu:mythu123@cluster0.g0mryfy.mongodb.net/postagram?retryWrites=true&w=majority"


const PORT = 7000;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false)
//connect mongoose
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//connection confirmation
let connection = mongoose.connection;

connection.once("open", () => {
    console.log("mongo db connected successfully");
})



app.listen(PORT, () => {
    console.log(`server runs successfully at ${PORT}`);
})

