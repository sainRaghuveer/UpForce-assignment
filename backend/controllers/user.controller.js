const { userModel } = require("../models/user.model")


exports.postUser = async (req, res) => {
    const {email} = req.body;
    try {
        const userAlreadyExist = await userModel.findOne({email});
        if(userAlreadyExist.length >0 ){
           return res.status(409).send({ "msg": "user already exists" });
        }else{
            const user = new userModel(req.body);
            await user.save();
            res.status(200).send({ "msg": "User saved successful", "status": true });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ "msg": "Something went wrong", "error": error.message });
    }
};

