const express = require('express');
const app = express();
const cors = require('cors');
const { configDotenv } = require('dotenv');
const port = 8000;
configDotenv

app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));  
require("./config/mongoose.config");
require('./routes/pet.routes')(app);
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})
