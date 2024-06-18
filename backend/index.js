const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rootRouter = require('./routes/index');

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// MongoDB connection
const mongoURI = "mongodb+srv://khumanthemlanthoiba:yjzP9B4x57cp7X9W@cluster0.tvhtm8q.mongodb.net/PaySwift?retryWrites=true&w=majority"; 
mongoose.connect(mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get("/", (req, res) => {
  res.send("this is response");
})
app.use('/api/v1', rootRouter); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
