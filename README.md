<!-- / - src/
index.js //server
models/
controllers/
middlewares/
services/
utils/
config/
repository/ - tests[later] - static/ - temp/ -->

# Welcome to Flights Service

## Project setup

Clone the project on your local
Execute `npm install` on the same path as of the root directory of the downloaded project.
Create a `.env` file in the root directory and add the following environment variables.

 ```Port=3000```

Inside the ```src/config``` folder create a new file ```config.json```  and then add the following piece of code of json.

 ```
    {
        "development": {
        "username": "root",
        "password": <YOUR DB PASSWORD>,
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
        }
    }
```
Once you added your db configuration as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`