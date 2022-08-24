const Router = require('express');
const router = Router();
const standController = require("../controllers/standController");
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkRoleMiddleware("ADMIN"), standController.create);
router.get('/', standController.getAll);
router.get('/:id', standController.getOne)

module.exports = router;
