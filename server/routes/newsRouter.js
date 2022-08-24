const Router = require('express');
const router = Router();
const newsController = require("../controllers/newsController");
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN', 'EDITOR'), newsController.create)
router.get('/', newsController.getAll)
router.get('/:id', newsController.getOne)

module.exports = router;
