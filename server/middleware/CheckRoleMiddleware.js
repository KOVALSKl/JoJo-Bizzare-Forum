const jwt = require('jsonwebtoken');

module.exports = function () {
    let validRoles = [...arguments];
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: "Пользователь не авторизован" });
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (!validRoles.includes(decoded.role)) {
                return res.status(403).json({ message: "Нет доступа", validRoles });
            }
            req.user = decoded;
            next()

        } catch (e) {
            res.status(401).json({ message: "Пользователь не авторизован" });
        }
    };
}