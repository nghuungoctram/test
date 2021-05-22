const queryBuilder = require('../config/database');
const uuid = require('uuid');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "1234";

module.exports = async function (req, res, next) {
    try {
        let token = req.header('Authorization').replace('Bearer ', ''),
            checkToken = jwt.verify(token, JWT_SECRET_KEY),
            user = await queryBuilder('users').where('id', checkToken.id).first();

        if (!checkToken || !user) {
            res.status(200).json("Access denied")
        } else {
            req.userLogin = user;
            next();
        }
    } catch (e) {
        console.log(e)
        res.status(200).json("Access denied")
    }
}