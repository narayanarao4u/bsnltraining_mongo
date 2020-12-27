const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

const CourseSchema = mongoose.Schema({
    courseType: String,
    courseName: String,
    courseDescription: String,
    courseImg:String,
    courseAMT:String,
    courselink:String
}, {
    timestamps: true,
    strict: false
});

const CertificateSchema = mongoose.Schema({
    studentname: String,
    rollNo: String,
    idNo: String,
    courseName:String
}, {
    timestamps: true,
    strict: false
});

const StudentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }
},
    {
        timestamps: true,
        strict: false
    });

module.exports.Student = mongoose.model('Student', StudentSchema);
module.exports.Note = mongoose.model('Note', NoteSchema);
module.exports.Certificate = mongoose.model('Certificate', CertificateSchema);
module.exports.Course = mongoose.model('Course', CourseSchema);
