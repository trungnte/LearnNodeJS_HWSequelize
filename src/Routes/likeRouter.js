const express = require('express');
const { getLikeByRes, createLikeByUser, updateLikeByUser, deleteLikeByUser,
    getLikeByUser } = require('../Controllers/likeControllers');
const likeRouter = express.Router();

likeRouter.get("/get-like-by-res", getLikeByRes);

likeRouter.post("/create-like-by-user", createLikeByUser);
likeRouter.put("/update-like-by-user", updateLikeByUser);
likeRouter.delete("/delete-like-by-user", deleteLikeByUser);
likeRouter.get("/get-like-by-user", getLikeByUser);

module.exports = likeRouter;