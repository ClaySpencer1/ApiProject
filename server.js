const express = require("express");
const userRouter = require("./routes/userRouter")
const Query = require("./db/models/index")

const app = express();

app.use(express.json())
app.use("/users", userRouter)


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({msg: err.message})
  })


app.listen(3000, () => console.log("server is listening..."))