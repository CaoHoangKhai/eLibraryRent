const express = require("express");
const cors = require("cors");
const libraryRouter = require("./app/routes/library.route");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use("/library", libraryRouter);
app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "Welcome to library book application." });
});

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});
module.exports = app;