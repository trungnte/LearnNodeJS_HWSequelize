const express = require('express');
const userRouter = require('./userRouter');
const likeRouter = require('./likeRouter');
const rateRouter = require('./rateRouter');

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/like", likeRouter);
rootRouter.use("/rate", rateRouter);


module.exports = rootRouter;