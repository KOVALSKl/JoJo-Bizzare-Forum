const ApiError = require("../errors/ApiError");
const { v4 } = require('uuid');
const path = require('path')
const { Character } = require('../models/models');

class CharacterController {
    async create(req, res, next) {
        try {
            const { name, description } = req.body;
            const { image } = req.files;
            let imageName = image.name;
            let fileName = v4() + imageName.substring(imageName.indexOf('.'));
            image.mv(path.resolve(__dirname, '..', 'static', 'characters', fileName));

            const character = await Character.create({
                name: name,
                description: description,
                image: fileName
            });

            return res.json(character);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        try {
            let character = await Character.findAll();
            return res.json(character);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            let id = req.params.id;
            let character = await Character.findByPk(+id);
            if (!character) {
                return next(ApiError.badRequest(`Такого персонажа не существует`));
            }
            return res.json(character);

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CharacterController();