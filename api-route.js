const router = require('express').Router();

let student = require('./student.controller');

router.get('/', (req,res)=>{
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

module.exports = router;