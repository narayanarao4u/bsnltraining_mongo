const router = require('express').Router();

let student = require('./controller/student.controller');
let course = require('./controller/course.controller');
let certificate = require('./controller/certificate.controller');

router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

router.route('/student')
    .get(student.index)
    .post(student.new)
    .put(student.update)
    .delete(student.delete)

router.route('/student/:id')
    .get(student.findid)

router.route('/course')
    .get(course.index)
    .post(course.new)
    .put(course.update)
    .delete(course.delete)

router.route('/certificate')
    .get(certificate.index)
    .post(certificate.new)
    .put(certificate.update)
    .delete(certificate.delete)
 
   
router.route('/findcertificate')
.post(certificate.find) 

module.exports = router;