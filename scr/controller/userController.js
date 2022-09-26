const UserService = require('../service/user.js')
const userService = new UserService()


module.exports = class UserController {

    async createUser(req, res, next) {
        //call a create user service
        let user = req.body;
        const result = await userService.CreateUser(user);

        if (result) {
            res.send(result);   
        }
        else {
            res.send("error");
        }
    }

    async GetAllUser(req, res, next) {
        const results = await userService.GetAllUser();

        if (results) {
            res.send(results);
        } else {
            res.send("error");
        }
    }

    async GetUserByFirstName(req, res, next) {
        const firstName = req.query.firstName;
        const result = await userService.GetUserByFirstName(firstName);

        if (result) {
            res.send(result);
        } else {
            res.send("error");
        }
    }
}