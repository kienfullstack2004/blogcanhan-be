const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const initRoutes = require("./routes/index.routes");
const dotenv = require("dotenv");
const cors = require("cors");
const { connect } = require("./config/connectDatabase");


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json({}));
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "DELETE", "POST", "PUT"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Pragma",
        "Cache-Control",
        "Expries"
    ]
}))
initRoutes(app);

connect();


app.listen(port, () => {
    console.log('App listening on port ' + port);
})

