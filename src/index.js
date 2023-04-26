const express = require('express');
const cors = require('cors');
const rootRouter = require('./Routes/rootRouter');
const swaggerRouter = require('./Routes/swaggerRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(8090);

app.use("/api", rootRouter);
app.use("/api-docs", swaggerRouter);
