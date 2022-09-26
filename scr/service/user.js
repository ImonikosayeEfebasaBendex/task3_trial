const UserModel = require('../models/userModel.js')

module.exports = class UserService {

    async CreateUser(user){
        const userToAdd = new UserModel(user)
        return await userToAdd.save();
    }

    async GetAllUser() {
        return await UserModel.find({})
    }

    async GetUserByFirstName(firstname) {
        return await UserModel.findOne({ firstName: "efe" })
    }

}