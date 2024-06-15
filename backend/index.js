const express = require("express");
const cors = require("cors");
const rootRouter = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/vi',rootRouter); //mainRouter == rootRouter

console.log("App listening on port 3000\n");
app.listen(3000);
