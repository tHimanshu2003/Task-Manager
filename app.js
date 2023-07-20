const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const port = 3000

const app = express()

app.use(express.static(__dirname.concat('\\public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/v1/tasks', tasks)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server Listening on port ${port}`);
        })
    }
    catch(err) {
        console.log(err);
    }
}

start()