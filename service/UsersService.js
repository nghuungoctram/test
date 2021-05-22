'use strict'
const queryBuilder = require('../config/database');
const uuid = require('uuid');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "1234";

class UsersService {
    static async createService(req) {
        try {
            let params = req.body;
            let dataInsert = {
                id: uuid.v4(),
                username: params.username,
                password: bcryptjs.hashSync(params.password, 10)
            }
            await queryBuilder('users').insert(dataInsert);
            return "Create user success";
        } catch (e) {
            console.log(e);
            return e
        }
    }
    static async loginService(req) {
        try {
            let params = req.body,
                username = params.username,
                password = params.password,
                user = await queryBuilder('users').where('username', username).first();
            if (!user || !bcryptjs.compareSync(password, user.password)) {
                return "Tài khoản hoặc mật khẩu không trùng khớp"
            } else {
                let token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, { expiresIn: 60 * 60 * 8 });
                return token;
            }
        } catch (e) {
            console.log(e);
            return e
        }
    }
}

module.exports = UsersService