const express = require('express');
const bodyParser = require('body-parser');

const { City } = require('./models/index');

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
    // create a express app server
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));


    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async() => {
        console.log(`server is running on ${PORT}`);
    })
};

setupAndStartServer();