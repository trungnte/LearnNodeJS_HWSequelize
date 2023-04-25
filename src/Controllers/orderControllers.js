const {successCode, errorCode} = require('../ultils/response');
const initModels = require('../Models/init-models');
const sequelize = require('../Models/index');
const { Op, where } = require('sequelize');
const order = require('../Models/order');

const models = initModels(sequelize);

const getOrder = async (req, res) => {
    try {
        let data = await models.order.findAll();
        successCode(res, "Get order success", data);
    } catch (error) {
        console.log(error);
        errorCode(res, "Get order failed!");
    }
}


const createOrder = async (req, res) => {
    try {
        let {user_id, food_id, amount, code, arr_sub_id} = req.body;
        let newOrder = {user_id, food_id, amount, code, arr_sub_id};
        console.log(newOrder);
        let data = await models.order.create(newOrder);
        successCode(res, "Create order success", data);
        
    } catch (error) {
        console.log(error);
        errorCode(res, "Create order failed!");
    }
}

const updateOrder = async (req, res) => {
    try {
        let {user_id, food_id, amount, code, arr_sub_id} = req.body;
        let newOrder = {user_id, food_id, amount, code, arr_sub_id};
        console.log(newOrder);
        let data = await models.order.update(newOrder, {
            where: {
                user_id,
                food_id
            }
        });
        successCode(res, "Update order success", data);
        
    } catch (error) {
        console.log(error);
        errorCode(res, "Update order failed!");
    }
}

const deleteOrder = async (req, res ) => {
    try {
        let {user_id, food_id} = req.body;
        let data = await models.order.destroy({
            where: {
                user_id,
                food_id
            }
        });
        successCode(res, "Delete order success", data);
        
    } catch (error) {
        console.log(error);
        errorCode(res, "Delete order failed!");
    }
}

module.exports = {
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
} 