const { userModel } = require("../models/user.model")


/*-------------- New user post --------------*/
exports.postUser = async (req, res) => {
    const { email } = req.body;
    try {
        const userAlreadyExist = await userModel.find({ email });
        if (userAlreadyExist.length > 0) {
            return res.status(409).send({ "msg": "user already exists" });
        } else {
            const user = new userModel(req.body);
            await user.save();
            res.status(200).send({ "msg": "User saved successful", "status": true });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ "msg": "Something went wrong", "error": error.message });
    }
};



/*-------------- All user get route with pagination --------------*/
exports.getUser = async (req, res) => {
    const page = req.params.page;
    try {
        const data = await userModel.find().skip((page-1)*4).limit(4);
        res.status(200).send({ "msg": "user data", "data": data });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ "msg": "Something went wrong", "error": error.message });
    }
};

