const { successCode, failedCode, errorCode} = require('../ultils/response');
const initModels = require('../Models/init-models');
const sequelize = require('../Models/index');
const { Op, where } = require('sequelize');
const like_res = require('../Models/like_res');


const models = initModels(sequelize);

// get rate by restaurant
const getRateByRes = async (req, res) => {
    try {
        let { res_id } = req.body;

        let data = await models.restaurant.findOne({
            where: {
                res_id: {
                    [Op.eq]: res_id
                }
            }, 
            include: [
                "rate_res"
            ] 
        });
        successCode(res, "Get rate by restaurant", data);
    } catch (error) {
        console.log(error);
        errorCode(res, "Get rate by restaurant failed!");
    }
}

// get rate by user
const getRateByUser = async (req, res) => {
    try {
        let { user_id } = req.body;
        let data = await models.user.findOne({
            where: {
                user_id: {
                    [Op.eq]: user_id
                }
            },
            include: [
                "rate_res"
            ]
        });
        successCode(res, "Get rate by user", data);
    } catch (error) {
        console.log(error);
        errorCode(res, "Get rate by user failed!");
    }
}


// create rate by user
const createRateByUser = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body;
        let date_rate = Date.now();
        let newRate = { user_id, res_id, amount, date_rate };
        console.log(newRate);


        let data = await models.rate_res.create(newRate);
        successCode(res, "Create rate success", data);
        // successCode(res, "Create user success", 0);
    } catch (error) {
        console.log("Create new rate failed err: ", error);
        errorCode(res, "Create rate failed!");
    }
}

// update rate by restaurant
const updateRateByUser = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body;
        let date_rate = Date.now();
        let newRate = { user_id, res_id, amount, date_rate };
        console.log(newRate);
        let result = await models.user.update(newRate, {
            where: {
                user_id
            }
        });

        console.log(result);
        successCode(res, "Update rate ok", result[0]);
    } catch (error) {
        errorCode(res, "Update rate failed!");
    }
}

// delete rate by restaurant
const deleteRateByUser = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        let result = await models.rate_res.destroy({
            where: {
                user_id,
                res_id
            }
        });
        successCode(res, "Delete rate_res ok", result);
    } catch (error) {
        errorCode(res, "Delete rate_res failed!");
    }
}


module.exports = { 
    getRateByRes,

    createRateByUser,
    updateRateByUser,
    deleteRateByUser,
    getRateByUser
};