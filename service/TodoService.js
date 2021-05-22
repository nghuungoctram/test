'use strict'
const queryBuilder = require('../config/database');
const uuid = require('uuid');

class TodoService {
    static async createService(req) {
        try {
            let params = req.body;
            let dataInsert = {
                id: uuid.v4(),
                title: params.title,
                description: params.description,
                created_at: new Date(),
                updated_at: new Date(),
            }
            await queryBuilder('todo').insert(dataInsert);
            return "create success";
        } catch (e) {
            console.log(e);
            return e
        }
    }

    static async listService(req) {
        try {
            let result = await queryBuilder('todo').select();
            return result;
        } catch (e) {
            console.log(e);
            return e
        }
    }

    static async getItemService(req) {
        try {
            let params = req.body,
                idTodo = params.idTodo,
                result = await queryBuilder('todo').where("id", idTodo).first();
            return result;
        } catch (e) {
            console.log(e);
            return e
        }
    }

    static async updateItemService(req) {
        try {
            let params = req.body,
                idTodo = params.idTodo,
                dataInsert = {
                    title: params.title,
                    description: params.description,
                    updated_at: new Date(),
                }
            await queryBuilder('todo').where("id", idTodo).update(dataInsert);
            return "update success";
        } catch (e) {
            console.log(e);
            return e
        }
    }

    static async deleteItem(req) {
        try {
            let params = req.body,
                idTodo = params.idTodo,
                result = await queryBuilder('todo').where("id", idTodo).del();
            return "Delete Success", result;
        } catch (e) {
            console.log(e);
            return e
        }
    }
}

module.exports = TodoService