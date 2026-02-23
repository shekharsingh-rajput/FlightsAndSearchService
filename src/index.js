const express = require('express');

const { PORT } = require("./config/serverConfig")

const setupAndStartServer = async () => {
    // create a express app server
    const app = express();
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    })
};

setupAndStartServer();