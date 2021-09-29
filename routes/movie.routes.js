const { Router } = require('express');
const { movieGet, moviesGet, moviePut, moviePost } = require('../controllers/movie.controllers');

const router = Router();


router.get('/:id', movieGet);
router.get('/', moviesGet);
router.put('/:id', moviePut);
router.post('/', moviePost);

module.exports = router;