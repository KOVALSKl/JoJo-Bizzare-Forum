const Router = require("express")
const router = Router()
const userRouter = require('./userRouter')
const standRouter = require('./standRouter')
const characterRouter = require('./characterRouter')
const roleRouter = require('./roleRouter')
const discussionRouter = require('./discussionRouter')
const newsRouter = require('./newsRouter')

router.use('/user', userRouter)
router.use('/stand', standRouter)
router.use('/character', characterRouter)
router.use('/role', roleRouter)
router.use('/discussion', discussionRouter)
router.use('/news', newsRouter)

module.exports = router