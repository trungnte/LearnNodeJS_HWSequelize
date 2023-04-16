const express = require('express');
const userRouter = require('./userRouter');
const likeRouter = require('./likeRouter');

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/like", likeRouter);


module.exports = rootRouter;