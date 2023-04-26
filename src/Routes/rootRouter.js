const express = require('express');
const userRouter = require('./userRouter');
const likeRouter = require('./likeRouter');
const rateRouter = require('./rateRouter');
const orderRouter = require('./orderRouter');

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/like", likeRouter);
rootRouter.use("/rate", rateRouter);
rootRouter.use("/order", orderRouter);

module.exports = rootRouter;