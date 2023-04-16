const { Model, DataTypes} = require ('sequelize');
const sequelize = require('./connectDb');

class User extends Model {}

User.init({
    userId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "user_id"
    },
    fullName: {
        type: DataTypes.STRING,
        field: "full_name"
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                msg: "Email is wrong format"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        field: "pass_word"
    }
}, {
    modelName: "User",
    sequelize,
    tableName: "user",
    timestamps: false
});

module.exports = User;
