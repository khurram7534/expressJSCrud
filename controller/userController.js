
let model = require('../models/dbQuery');

let databaseTableName = 'test';

// to show list of user
exports.index = function(req,res,next)
{
    model.index(req.con,databaseTableName,function(err,value){
       res.render('users/list',{data:value});
    });
};

//to show edit form
exports.edit = function (req,res,next) {
    model.edit(req.con,req.params.id,databaseTableName,function (err,value) {
        console.log(value);
        res.render('users/edit',{data:value[0]});
    });
};

//to save update form
exports.update = function(req,res,next){
    model.update(req.con,req.body,databaseTableName,function(err,value){
        if(err)
        {
            console.log('error came in updating record'+err);
        }
        else{
            res.redirect('/users/list');
        }
    });
};

//to delete record
exports.delete = function(req,res,next){
    model.destroy(req.con,req.params.id,databaseTableName,function(err,value){
        if(err)
        {
            console.log('error came in updating record'+err);
        }
        else{
            res.redirect('/users/list');
        }
    });
};

//create form
exports.create = function(req,res,next){
    res.render('users/create');
};

// save record
exports.save = function (req, res,next) {
    model.store(req.con,req.body,databaseTableName,function (err,value) {
        if(err)
        {
            console.log('error came in updating record'+err);
        }
        else{
            res.redirect('/users/list');
        }
    });
};