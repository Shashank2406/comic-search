var User = require('../models/user');
var Series = require('../models/series');
var Season = require('../models/season');
var Comic = require('../models/comic');
// {
//   "status": true,
//   "respData": {
// "data": "your data either json or array"
//    }
// }
exports.deletecomic=function(req,res){
    var name1 = req.params.id;
    Comic.findOne({_id: name1}, function(err, comic){
        if(err){
            res.json(err);
        }
        if(comic){ 
           Comic.remove({_id: name1}, function(err){
                if(err){
                        res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
                        }

                res.json({
                            "status": true,
                            "respData": {
                        "data": "Success Removed Season"
                                }
                            });
            })  
       }else{
            res.json({
                    "status": false,
                    "respData": {
                    "data": "Series Doesn't exist"
                        }
                    });
            }
                      
    })
}   

exports.deleteseason=function(req,res){
    var name1 = req.params.id;
    Season.findOne({_id: name1}, function(err, season){
        if(err){
            res.json(err);
        }
        if(season){ 
           Season.remove({_id: name1}, function(err){
                if(err){
                        res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
                        }

                res.json({
                            "status": true,
                            "respData": {
                        "data": "Success Removed Season"
                                }
                            });
            })  
       }else{
            res.json({
                    "status": false,
                    "respData": {
                    "data": "Series Doesn't exist"
                        }
                    });
            }
                      
    })
}   

exports.deleteseries=function(req,res){
    var name1 = req.params.id;
    console.log(name1)
    Series.findOne({_id: name1}, function(err, series){
        if(err){
            res.json(err);
        }
        if(series){
           Series.remove({_id: name1}, function(err){
                if(err){
                        res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
                        }

                res.json({
                            "status": true,
                            "respData": {
                        "data": "Success"
                                }
                            });
            })  
       }else{
            res.json({
                    "status": false,
                    "respData": {
                    "data": "Series Doesn't exist"
                        }
                    });
            }
                      
    })
}   



exports.deleteusers=function(req,res){
    var username1 = req.params.username;
    User.findOne({username: username1}, function(err, user){
        if(err){
            res.json(err);
        }

        if(user){
           User.remove({username: username1}, function(err){
                if(err){
                        res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
                        }

                res.json({
                            "status": true,
                            "respData": {
                        "data": "Success"
                                }
                            });
            })  
       }else{
            res.json({
                    "status": false,
                    "respData": {
                    "data": "User Doesn't exist"
                        }
                    });
            }
                      
    })
}   
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
            res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }
        res.json({
            "status": true,
            "respData": {
             "data":response
            }
        })
        
    });
}

exports.getuser=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }

        res.json({
            "status": true,
            "respData": {
             "data":response
            }
        });
    })
}

exports.searchuser = function (req, res) {
    console.log(req.params.reg);
    var username1 = req.body.username;
    var password1 = req.body.password;
    User.findOne({username:username1,password:password1}, function (err, response) {
        if (err) {
            res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }
        if ((response || []).length === 0){
            return res.json({
                    "status": false,
                    "respData": {
                    "data": "User Doesn't exist"
                        }
                    });
        }
        return res.json({
            "status": true,
            "respData": {
             "data":response.role
            }
        });
    })
};





exports.searchcomic = function (req, res) {
    console.log(req.params.reg);
    var regex = RegExp(req.params.reg);
    Comic.find({
        name: regex
    }, function (err, response) {
        if (err) {
            return res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }
        if ((response || []).length === 0){
            return res.json({
                    "status": false,
                    "respData": {
                    "data": "Comic Doesn't exist"
                        }
                    });
        }
        return res.json({
            "status": true,
            "respData": {
             "data":response
            }
        });
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
            return res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }

        res.json({
            "status": true,
            "respData": {
             "data":response
            }
        })
        
    });
};

exports.getseries=function(req,res){
    Series.find({}, function(err, response){
        if(err) {
            return res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }

        res.json({
            "status": true,
            "respData": {
             "data":response
            }
        });
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
    var name1=season.series_id;
    console.log(name1)
    Series.findOne({_id: name1},function(err,response){
        if(err){
            return res.json({
                            "status": false,
                            "respData": {
                        "data": "Invalid Series Name"
                                }
                            });

        }
    season.save(function (err, response) {
        if(err) {
            return res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }

        res.json({
            "status": true,
            "respData": {
             "data":response
            }
        })
        
    });

    })
    
};

exports.getseason=function(req,res){
    Season.find({}, function(err, response){
        if(err) {
            return res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }

        res.json({
            "status": true,
            "respData": {
             "data":response
            }
        });
    })
}

exports.postcomic = function (req,res){
    var comic = new Comic({
        season_id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        story: req.body.description,
        created_at: new Date(),
        updated_at: ""
    });
    comic.save(function (err, response) {
        if(err) {
            return res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }

        res.json({
            "status": true,
            "respData": {
             "data":response
            }
        })
        
    });
};

exports.getcomic=function(req,res){
    Comic.find({}, function(err, response){
        if(err) {
            return res.json({
                            "status": false,
                            "respData": {
                        "data": err
                                }
                            });
        }

        res.json({
            "status": true,
            "respData": {
             "data":response
            }
        });
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



