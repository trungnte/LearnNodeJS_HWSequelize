const User = require('../Models/user');
const { successCode, failedCode, errorCode} = require('../ultils/response');

// get user
const getUser = async (req, res) => {
    try {
        let data = await User.findAll();
        successCode(res, "Get user ok", data);
    } catch (error) {
        errorCode(res, "Get user failed!");
    }
}

// create user
const createUser = async (req, res) => {
    try {
        let { userId, fullName, email, password} = req.body;
        let newUser = { userId, fullName, email, password };
        let data = await User.create(newUser);
        successCode(res, "Create user success", data);
    } catch (error) {
        console.log("Create new user failed err: ", error);
        errorCode(res, "Create user failed!");
    }
}

// create user
const updateUser = async (req, res) => {
    try {
        let { userId, fullName, email, password} = req.body;
        let updateUser = { fullName, email, password};
        let result = await User.update(updateUser, {
            where: {
                userId
            }
        });

        console.log(result);
        successCode(res, "Update user ok", result[0]);
    } catch (error) {
        errorCode(res, "Update user failed!");
    }
}

// create user
const deleteUser = async (req, res) => {
    try {
        let { userId } = req.body;
        let result = await User.destroy({
            where: {
                userId
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
