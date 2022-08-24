const ApiError = require("../errors/ApiError");
const { Role } = require('../models/models');

class RoleController {
    async create(req, res, next) {
        try {
            const { name } = req.body;

            const role = await Role.create({
                name: name,
            });

            return res.json(role);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        try {
            let roles = await Role.findAll();
            return res.json(roles);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new RoleController();