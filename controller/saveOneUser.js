const { users } = require('../model/User');
module.exports =  (req, res) => {
    users.create({
        name:  req.body.name,
        email : req.body.email,
        phone: req.body.phone
    }, 
    function (err, doc) {
        if (err) return res.status(500).send(doc);
        res.status(200).send(doc);
        // console.log(doc);
    });
}