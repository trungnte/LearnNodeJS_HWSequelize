const express = require('express');
const { getRateByRes, createRateByUser, updateRateByUser, deleteRateByUser,
    getRateByUser } = require('../Controllers/rateControllers');
const rateRouter = express.Router();

rateRouter.get("/get-rate-by-res", getRateByRes);

rateRouter.post("/create-rate-by-user", createRateByUser);
rateRouter.put("/update-rate-by-user", updateRateByUser);
rateRouter.delete("/delete-rate-by-user", deleteRateByUser);
rateRouter.get("/get-rate-by-user", getRateByUser);

module.exports = rateRouter;