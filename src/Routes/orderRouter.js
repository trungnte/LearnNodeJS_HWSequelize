const express = require('express');
const { createOrder, getOrder, updateOrder, deleteOrder } = require('../Controllers/orderControllers');

const orderRouter = express.Router();

orderRouter.get("/get-order", getOrder);
orderRouter.post("/create-order", createOrder);
orderRouter.put("/update-order", updateOrder);
orderRouter.delete("/delete-order", deleteOrder);

module.exports = orderRouter;