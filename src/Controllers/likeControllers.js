const { successCode, failedCode, errorCode} = require('../ultils/response');
const initModels = require('../Models/init-models');
const sequelize = require('../Models/index');
const { Op, where } = require('sequelize');


const models = initModels(sequelize);

// get like by restaurant
const getLikeByRes = async (req, res) => {
    try {
        let { res_id } = req.body;
        //FIXME: chuối cả nải vì lặp info nhà hàng ở các like
        // console.log("res_id: ", res_id);
        // let data = await models.like_res.findAll({
        //     where: {
        //         res_id: {
        //             [Op.eq]: res_id
        //         }
        //     },
        //     include: [
        //         "re"
        //     ]
        // });
        
        // FIXME: tìm theo nhà hàng: tìm nhà hàng dc like bởi nhiều người
        let data = await models.restaurant.findOne({
            where: {
                res_id: {
                    [Op.eq]: res_id
                }
            }, 
            include: [
                "like_res"
            ]
        });
        successCode(res, "Get like by restaurant", data);
    } catch (error) {
        console.log(error);
        errorCode(res, "Get like by restaurant failed!");
    }
}

// get like by user
const getLikeByUser = async (req, res) => {
    try {
        let { user_id } = req.body;
        let data = await models.user.findOne({
            where: {
                user_id: {
                    [Op.eq]: user_id
                }
            },
            include: [
                "like_res"
            ]
        });
        successCode(res, "Get like by user", data);
    } catch (error) {
        console.log(error);
        errorCode(res, "Get like by user failed!");
    }
}


// create like by user
const createLikeByUser = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        let date_like = Date.now();
        let newLike = { user_id, res_id, date_like };
        console.log(newLike);


        let data = await models.like_res.create(newLike);
        successCode(res, "Create like success", data);
        // successCode(res, "Create user success", 0);
    } catch (error) {
        console.log("Create new like failed err: ", error);
        errorCode(res, "Create like failed!");
    }
}

// update like by restaurant
const updateLikeByUser = async (req, res) => {
    try {
        let { user_id, full_name, email, pass_word} = req.body;
        let updateUser = { full_name, email, pass_word};
        let result = await models.user.update(updateUser, {
            where: {
                user_id
            }
        });

        console.log(result);
        successCode(res, "Update user ok", result[0]);
    } catch (error) {
        errorCode(res, "Update user failed!");
    }
}

// delete like by restaurant
const deleteLikeByUser = async (req, res) => {
    try {
        let { user_id } = req.body;
        let result = await models.user.destroy({
            where: {
                user_id
            }
        });
        successCode(res, "Delete user ok", result);
    } catch (error) {
        errorCode(res, "Delete user failed!");
    }
}


module.exports = { 
    getLikeByRes,

    createLikeByUser,
    updateLikeByUser,
    deleteLikeByUser,
    getLikeByUser
};