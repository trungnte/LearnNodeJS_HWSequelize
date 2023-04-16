const express =  require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../Controllers/userControllers');
const userRouter = express.Router();


userRouter.get("/get-user", getUser);
userRouter.post("/create-user", createUser);
userRouter.put("/update-user", updateUser);
userRouter.delete("/delete-user", deleteUser);


module.exports = userRouter;