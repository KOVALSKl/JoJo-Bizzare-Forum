const Router = require('express');
const router = Router();
const discussionController = require("../controllers/discussionController");
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN', "EDITOR"), discussionController.create);
router.get('/', discussionController.getAll);
router.get('/:id', discussionController.getOne)

module.exports = router;
