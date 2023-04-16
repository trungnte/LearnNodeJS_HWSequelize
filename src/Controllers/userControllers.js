
const { successCode, failedCode, errorCode} = require('../ultils/response');

const initModels = require('../Models/init-models');
const sequelize = require('../Models/index');
const models = initModels(sequelize);

// get user
const getUser = async (req, res) => {
    try {
        let data = await models.user.findAll();
        // let data = await models.user.findAll({
        //     include: ["food_id_foods"]
        // });
        successCode(res, "Get user ok", data);
    } catch (error) {
        errorCode(res, "Get user failed!");
    }
}

// create user
const createUser = async (req, res) => {
    try {
        let { user_id, full_name, email, pass_word} = req.body;
        let newUser = { user_id, full_name, email, pass_word };
        let data = await models.user.create(newUser);
        successCode(res, "Create user success", data);
    } catch (error) {
        console.log("Create new user failed err: ", error);
        errorCode(res, "Create user failed!");
    }
}

// create user
const updateUser = async (req, res) => {
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

// delete user
const deleteUser = async (req, res) => {
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
    getUser,
    createUser,
    updateUser,
    deleteUser
};
