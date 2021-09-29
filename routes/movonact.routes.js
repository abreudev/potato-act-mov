const { Router } = require('express');
const { movonactGet, movonactGets } = require('../controllers/movonact.controllers');

const router = Router();


router.get('/:id_mov', movonactGet);
router.get('/', movonactGets);
// router.put('/:id', actonmovPut);
// router.post('/', actonmovPost);
// router.delete('/', actonmovDelete);

module.exports = router;