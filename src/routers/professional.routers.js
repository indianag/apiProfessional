const {Router} = require ("express")
const router = Router()
const professionalCtrl = require ('../controller/professional.controller');


router.get('/professional', professionalCtrl.consultarProfesional);

router.get('/professional/all', professionalCtrl.getAllProfessionals);

router.post('/professional', professionalCtrl.subirProfessional);

router.put('/professional', professionalCtrl.modificarProfessional);

router.delete('/professional', professionalCtrl.eliminarProfessional);

module.exports = router;