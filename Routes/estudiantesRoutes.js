const espress = require('express');
const router = espress.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Consulta de estudiantes' });
});

router.post('/', (req, res) => {
    res.json({ msg: 'Ingreso de estudiantes' });
});

router.route("/:id")
    .get((req, res) => {
    res.json({ msg: 'Consulta de un estudiante' });
    })
    .put((req, res) => {
    res.json({ msg: 'Actualizacion de estudiante' });
    })
    .delete((req, res) => {
    res.json({ msg: 'Borrado de estudiante' });
    });

module.exports = router;
