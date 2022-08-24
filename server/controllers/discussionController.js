const ApiError = require("../errors/ApiError");
const { v4 } = require('uuid');
const path = require('path')
const { Discussion } = require('../models/models');

class StandController {
    async create(req, res, next) {
        try {
            let { title } = req.body;

            let discussion = await Discussion.create({
                title: title,
                userNickname: req.user.nickname
            });

            res.json(discussion);

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        try {
            let discussions = await Discussion.findAll();
            return res.json(discussions);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            let id = req.params.id;
            let discussion = await Discussion.findByPk(+id);
            if (!discussion) {
                return next(ApiError.badRequest('Такого обсуждения не существует'));
            }
            return res.json(discussion);

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new StandController();