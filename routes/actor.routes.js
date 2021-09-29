const { Router } = require('express');
const { actorGet, actorsGet, actorPut, actorPost } = require('../controllers/actor.controllers');

const router = Router();


router.get('/:id', actorGet);
router.get('/', actorsGet);
router.put('/:id', actorPut);
router.post('/', actorPost);

module.exports = router;