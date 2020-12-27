const Document = require('../data.model').Certificate;


exports.index =  function(req, res){

    Document.find((err, result) => {
        if (!err)
            res.json({ msg: 'Data Retrive Success', data: result });
        else
            res.json({ msg: 'Data Retrive failed', err : err });
    });

}

exports.new =  function(req, res){
    var doc = new Document(req.body);    
    doc.save((err, result) => {
        if (!err)
            res.json({ msg: 'Insert Success...', data: result });
        else
            res.json({ msg: 'Error during record insertion ', err : err });
    });

}

exports.update =  function(req, res){
    Document.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, result) => {
        if (!err) { res.json({msg :'Update Success', data : result}); }
        else { res.json({msg:'failed to update : ', err: err}); }
    });

}


exports.delete =  function(req, res){
    Document.findOneAndDelete({ _id: req.body._id }, (err, result) => {
        if (!err) { res.json({msg :'Delete Success'}); }
        else { res.json({msg:'failed to Delete : ', err: err}); }
    });

}
