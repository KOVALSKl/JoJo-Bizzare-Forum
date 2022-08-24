require('dotenv').config()
const express = require("express")
const sequelize = require("./db")
const models = require("./models/models")
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const router = require('./routes/index')
const fileUploader = require('express-fileupload');
const path = require('path')

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUploader({}))
app.use('/api', router)
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()