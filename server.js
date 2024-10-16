// server.js

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MONGODB')
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB: ', err)
    })

// Middleware
app.use(express.json())

// Define Todo schema and model here (step 2)
const todoSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)
// Define CRUD routes here (step 3)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})