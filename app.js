var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var helmet = require("helmet")

var indexRouter = require("./routes/index")

var app = express()

// security headers
app.use(helmet())

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
// app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    console.error('Unhandled error:', err)
    res.status(err.status || 500)
    res.json({
        code: err.status || 500,
        msg: req.app.get("env") === "development" ? err.message : "Internal server error"
    })
})


module.exports = app
