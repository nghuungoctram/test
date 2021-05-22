'use strict'

const CourseService = require("../service/CourseService");

class CourseController {
    static async list(req, res, next) {
        try {
            let data = await CourseService.getList(req);
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

module.exports = CourseController