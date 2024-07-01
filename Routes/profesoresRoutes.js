const espress = require('express');
const router = espress.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Consulta de profesores' });
});

router.post('/', (req, res) => {
    res.json({ msg: 'Ingreso de profesores' });
});

router.route("/:id")
    .get((req, res) => {
        res.json({ msg: 'Consulta de un profesor' });
    })
    .put((req, res) => {
        res.json({ msg: 'Actualizacion de profesor' });
    })
    .delete((req, res) => {
        res.json({ msg: 'Borrado de profesor' });
    });

module.exports = router;
