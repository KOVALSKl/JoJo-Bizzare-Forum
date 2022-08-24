const Router = require('express');
const router = Router();
const characterController = require("../controllers/characterController");
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), characterController.create);
router.get('/', characterController.getAll);
router.get('/:id', characterController.getOne)

module.exports = router;
