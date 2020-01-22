var express = require('express');
var router = express.Router();
var User = require('../models/users');

router.get('/', function (req, res, next) {
    res.send('API is working properly');
});

router.post('/', function (req, res, next) {
    //res.send(req.body);
    //console.log(req.body);

    const user = new User({
        
        name : req.body.name,
        token : req.body.accessToken,
        email : req.body.email,
        provider : req.body.provider,
        providerId : req.body.provider_id,
        providerPic : req.body.provider_pic
    });



    user.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message : err});
        });

});

module.exports = router;