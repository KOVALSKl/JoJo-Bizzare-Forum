const ApiError = require("../errors/ApiError");
const { v4 } = require('uuid');
const path = require('path')
const { SingleNews } = require('../models/models');

class NewsController {
    async create(req, res, next) {
        try {
            const { title, description } = req.body;
            const { image } = req.files;
            let imageName = image.name;
            let fileName = v4() + imageName.substring(imageName.indexOf('.'));
            image.mv(path.resolve(__dirname, '..', 'static', 'news', fileName));

            let singleNews = await SingleNews.create({
                title: title,
                description: description,
                image: fileName,
                userNickname: req.user.nickname
            });

            return res.json(singleNews);

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        try {
            let news = await SingleNews.findAll();
            return res.json(news);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            let id = req.params.id;
            let singleNews = await SingleNews.findByPk(+id);
            if (!singleNews) {
                return next(ApiError.badRequest(`Такой новости не существует`));
            }
            return res.json(singleNews);

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new NewsController();