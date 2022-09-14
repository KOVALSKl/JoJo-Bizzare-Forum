const ApiError = require("../errors/ApiError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Role } = require("../models/models");

function generateJWT(nickname, email, role) {
    return jwt.sign(
        { nickname: nickname, email: email, role: role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' });
}

class UserController {
    async registration(req, res, next) {
        const { nickname, email, birthday, password } = req.body;
        let candidateNickname = await User.findByPk(nickname);
        let candidateEmail = await User.findOne({ where: { email: email } });

        if (candidateNickname) {
            return next(ApiError.badRequest("Пользователь с таким ником уже существует"));
        } else if (candidateEmail) {
            return next(ApiError.badRequest("Пользователь с таким email уже существует"));
        }


        try {
            let hashPassword = await bcrypt.hash(password, 7);
            let gmtDate = new Date(birthday);

            // TODO: ПРАВИЛЬНАЯ РЕГУЛИРОВКА РОЛЕЙ
            let role = await Role.findOne({ where: { name: "USER" } });

            const user = await User.create({
                nickname: nickname,
                email: email,
                password: hashPassword,
                birthday: gmtDate,
                roleId: role.id
            });
            const token = generateJWT(user.nickname, user.email, role.name);

            return res.json({ token });
        } catch (e) {
            return next(ApiError.badRequest("Ошибка регистрации"));
        }
    }

    async login(req, res, next) {
        const { userlogin, password } = req.body;
        let user;
        if (!userlogin) {
            return next(ApiError.notFound("Пользователь не найден"));
        }

        user = await User.findOne({ where: { nickname: userlogin } }) ||
            await User.findOne({ where: { email: userlogin } });

        if (!user) {
            return next(ApiError.notFound("Пользователь не найден"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest("Неверный пароль"));
        }
        let role = await Role.findByPk(user.roleId);
        const token = generateJWT(user.nickname, user.email, role.name);
        return res.json({ token });
    }

    async check(req, res, next) {
        let user = req.user;
        const token = generateJWT(user.nickname, user.email, user.role);
        return res.json({ token, user });
    }

    async getAll(req, res, next) {
        try {
            let users = await User.findAll();
            return res.json(users);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController();