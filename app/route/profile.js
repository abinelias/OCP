var mongoose = require('mongoose'),
    Profile = mongoose.model('Profile');

module.exports = function(app) {  
    app.post('/profil', function(req, res, next) {
        var profile = new Profile({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Age: req.body.Age,
            AddressLine1: req.body.AddressLine1,
            AddressLine2: req.body.AddressLine2,
            UserName: req.body.UserName,
            Password: req.body.Password
        });
        profile.save(function(err, data) {
            if(err) {
                return next(err);
            }
            res.status(201).json(data);
        });        
    });  

app.get('/profil', function(req, res, next) {
        Profile.find().exec(function(err, data) {
            if(err) {
                return next(err);
            }
            res.json(data);
        });
    });
   

     app.get('/profil/:id', function(req, res) {
        Profile.findOne({ _id : req.params.id }, function(err, data){
            res.json(data);
        });
    });

    app.put('/profil/:id', function(req, res, next) {
        Profile.findOne({ _id : req.params.id }, function(err, data) {
            data.FirstName=  req.body.FirstName;
            data.LastName = req.body.LastName;
            data.Age = req.body.Age;
            data.AddressLine1 = req.body.AddressLine1;
            data.AddressLine2 = req.body.AddressLine2;
            data.UserName = req.body.UserName;
            data.Password = req.body.Password;
            data.save(function(err, data) {
                if(err) {
                    return next(err);
                }
                res.status(201).json(data);
            });
        });
    });
    
};