const express = require('express');

const { City, sequelize } = require('./models/index')

const { PORT } = require("./config/serverConfig")
const ApiRoutes = require('./routes/index')

const setupAndStartServer = async () => {
    // create a express app server
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async() => {
        console.log(`server is running on ${PORT}`);
        await sequelize.sync();
    })
};

setupAndStartServer();