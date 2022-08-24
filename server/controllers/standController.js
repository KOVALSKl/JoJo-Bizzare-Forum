const ApiError = require("../errors/ApiError");
const { v4 } = require('uuid');
const path = require('path')
const { Stand } = require('../models/models');

class StandController {
    async create(req, res, next) {
        try {
            const { name, description } = req.body;
            const { image } = req.files;
            let imageName = image.name;
            let fileName = v4() + imageName.substring(imageName.indexOf('.'));
            image.mv(path.resolve(__dirname, '..', 'static', 'stands', fileName));

            const stand = await Stand.create({
                name: name,
                description: description,
                image: fileName
            });

            return res.json(stand);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        try {
            let stands = await Stand.findAll();
            return res.json(stands);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            let id = req.params.id;
            let stand = await Stand.findByPk(+id);
            if (!stand) {
                return next(ApiError.badRequest(`Такого стенда не существует`));
            }
            return res.json(stand);

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new StandController();