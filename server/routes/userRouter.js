const Router = require('express');
const router = Router();
const userController = require("../controllers/userController");
const authMiddleware = require('../middleware/AuthMidlleware');
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.get('/', checkRoleMiddleware('ADMIN'), userController.getAll);

module.exports = router;
