const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
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
        timestamps: true
    },
    {
        strict: false
    });

module.exports.Student = mongoose.model('Student', StudentSchema);
module.exports.Note = mongoose.model('Note', NoteSchema);