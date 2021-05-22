'use strict'

const UsersService = require("../service/UsersService");

class UsersController {
    static async create(req, res, next) {
        try {
            let data = await UsersService.createService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "Server Error"
                }],
                data: null
            });
        }
    }
    static async login(req, res, next) {
        try {
            let data = await UsersService.loginService(req);
            res.status(200).json({
                status: "SUCCESS",
                errors: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: "FAIL",
                errors: [{
                    code: 1000,
                    message: "Server Error"
                }],
                data: null
            });
        }
    }
}

module.exports = UsersController