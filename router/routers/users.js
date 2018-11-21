const { Router } = require('express');
const UserController = require('../../controller/userController')

const router = new Router();
const userCtrl = new UserController();

router.get('/:userId', userCtrl.getOne);
router.post('/', userCtrl.createOne);

module.exports = router;
