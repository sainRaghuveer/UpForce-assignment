const { userModel } = require("../models/user.model")


exports.postUser = async (req, res) => {
    try {
        const userAlreadyExist = await userModel.findOne({email});
    } catch (error) {

    }
}