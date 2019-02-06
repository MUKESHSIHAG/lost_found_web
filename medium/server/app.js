const express = require('express')
const routes = require('./routes/')
const mongoose = require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()

const url = process.env.MONGODB_URI || ("mongodb://localhost:27017/medium", {useNewurlParser: true})

//configure cloudinary
cloudinary.config({
    cloud_name: 'mukesh',
    api_key: '',
    api_secret: ''
})

//connecct to MongoDBStore
try{
    mongoose.connect(url, {

    })
} catch(error){

}

let port = 4000 || process.env.PORT

//set up routes(API endpoints)
routes(router)

//setup middleware
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/api', router)

//start server
app.listen(port, () => {
    console.log(`server started at: ${port}`)
})