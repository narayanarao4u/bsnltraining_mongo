const router = require('express').Router();

let student = require('./controller/student.controller');
let course = require('./controller/course.controller');
let certificate = require('./controller/certificate.controller');
let college = require('./controller/college.controller');

router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

router.route('/college')
    .get(college.index)
    .post(college.new)
    .put(college.update)
    .delete(college.delete)

router.route('/collegeSort')
    .get(college.DataSort)



router.route('/student')
    .get(student.index)
    .post(student.new)
    .put(student.update)
    .delete(student.delete)

router.route('/student/:id')
    .get(student.findid)

router.route('/findstudent/')
    .post(student.find)

router.route('/reports/collegeStudents')
    .get(student.collegeStudents)

router.route('/course')
    .get(course.index)
    .post(course.new)
    .put(course.update)
    .delete(course.delete)

router.route('/course/:courselink')
    .get(course.findCoursePage)

router.route('/certificate')
    .get(certificate.index)
    .post(certificate.new)
    .put(certificate.update)
    .delete(certificate.delete)


router.route('/findcertificate')
    .post(certificate.find)

module.exports = router;
