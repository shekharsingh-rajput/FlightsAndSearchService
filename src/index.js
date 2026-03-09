const express = require('express');
const bodyParser = require('body-parser');

const { City } = require('./models/index')

const { PORT } = require("./config/serverConfig")
const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async () => {
    // create a express app server
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, async() => {
        console.log(`server is running on ${PORT}`);
    })
};

setupAndStartServer();