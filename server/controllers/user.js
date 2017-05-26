var User = require('../models/user');
var Series = require('../models/series');
var Season = require('../models/season');
var Comic = require('../models/comic');


exports.postuser = function(req,res){
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        created_at: new Date(),
        updated_at: ""
    })
    user.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }
        res.json({
            success: true,
            body: response
        })
        
    });
}

exports.getuser=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.searchuser = function (req, res) {
    console.log(req.params.reg);
    var username1 = req.body.username;
    var password1 = req.body.password;
    User.find({username:username1,password:password1}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }
        if ((response || []).length === 0){
            return res.json("doesn't exit");
        }
        return res.json(response);
    })
};





exports.searchcomic = function (req, res) {
    console.log(req.params.reg);
    var regex = RegExp(req.params.reg);
    Comic.find({
        name: regex
    }, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }
        if ((response || []).length === 0){
            return res.json("doesn't exit");
        }
        return res.json(response);
    })
};


exports.postseries = function (req,res){
    var series = new Series({
        name: req.body.name,
        description: req.body.description,
        created_at: new Date(),
        updated_at: ""
    });
    series.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })
        
    });
};

exports.getseries=function(req,res){
    Series.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.postseason = function (req,res){
    var season = new Season({
        series_id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        startson: req.body.startson,
        endson: req.body.endson,
        created_at: new Date(),
        updated_at: ""
    });
    season.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })
        
    });
};

exports.getseason=function(req,res){
    Season.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.postcomic = function (req,res){
    var comic = new Comic({
        season_id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        story: req.body.story,
        created_at: new Date(),
        updated_at: ""
    });
    comic.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })
        
    });
};

exports.getcomic=function(req,res){
    Comic.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}










// exports.postUsers = function (req, res) {
//     var user = new User({
//         username: req.body.username,
//         email: req.body.email,
//         name: req.body.name,
//         phone_number: req.body.phone_number,
//         created_at: new Date(),
//         updated_at: ""
//     });

//     user.save(function (err, response) {
//         if(err) {
//             return customHandleError(req, res, next, err);
//         }

//         res.json({
//             success: true,
//             body: response
//         })
        
//     });
// };


// exports.getUsers=function(req,res){
//     User.find({}, function(err, response){
//         if(err) {
//             return res.json(req, res, err);
//         }

//         res.json(response);
//     })
// }



// exports.updateUsers=function(req,res){
//     var id = req.params.id;
//     User.findOne({_id: id}, function(err, user){
//         if(err){
//             res.json(err);
//         }

//         var username = req.body.username;
//         user.username = username;
//         user.updated_at = new Date();

//         user.save(function(err, response){
//             if(err){
//                 res.json(err);
//             }

//             res.json(response);
//         })
//     })
// }

// exports.deleteUsers=function(req,res){
//     var id = req.params.id;
//     User.findOne({_id: id}, function(err, user){
//         if(err){
//             res.json(err);
//         }

//         if(user){
//            User.remove({_id: id}, function(err){
//                 if(err){
//                     res.json(err);
//                 }

//                 res.json("success");
//             })  
//        }else{
//             res.json("User doesnt exist");
//        }
                      
//     })
// }    

// exports.idsearch=function(req,res){
//     var id = req.params.id;
//     User.findOne({_id:id}, function(err,user){
//         if(err){
//             res.json(err);
//         }
//         if(user){
//             res.json(user);
//         }
//         else{
//             res.json("User Doesnot exist");
//         }
//     })
// }

// exports.regexsearch=function(req,res){
//     var reg = req.params.reg;
//     regexp = new RegExp(reg);
//     User.find({name:regexp}, function(err,user){
//         if(err){
//             res.json(err);
//         }
//         if(user){
//             res.json(user);
//         }
//         else{
//             res.json("User Doesnot exist");
//         }
//     })
// }



