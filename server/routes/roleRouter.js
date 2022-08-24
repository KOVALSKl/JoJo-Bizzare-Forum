const Router = require('express');
const router = Router();
const roleController = require("../controllers/roleController");
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), roleController.create);
router.get('/', checkRoleMiddleware('ADMIN'), roleController.getAll);

module.exports = router;
