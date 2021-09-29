const { Router } = require('express');
const { actonmovGet, actonmovGets, actonmovPost, actonmovPut, actonmovDelete } = require('../controllers/actonmov.controllers');

const router = Router();


router.get('/:id_act', actonmovGet);
router.get('/', actonmovGets);
router.put('/:id', actonmovPut);
router.post('/', actonmovPost);
router.delete('/', actonmovDelete);

module.exports = router;