'use strict'
const queryBuilder = require('../config/database');

class CourseService {
    static async getList(req) {
        try {
            let data = await queryBuilder('user').orderBy('UserId', 'DESC').select().limit(2);
            console.log(req.body.User)
            return data;
        } catch (e) {

        }
    }
}
module.exports = CourseService