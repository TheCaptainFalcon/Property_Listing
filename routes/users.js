const express = require('express'),
  router = express.Router(),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  keys = require('../config/dev')

const UserModel = require('../models/UserModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res) {
  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if(user) {
        return res.status(400).json({ email: 'Email already taken' });
      } else {
        const newUser = new UserModel({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        });
      }
    });
});

router.post('/login', function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  UserModel.findOne({ email: email })
    .then(user => {
      if(!user) {
        return res.status(404).json({email: 'User not found'})
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {

            const payload = { id: user.id, name: user.name }
            jwt.sign(payload, keys.secret, { expiresIn: 86400 }, () => {
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              }
            });
          } else {
            return res.status(400).json({ password: 'Invalid password' });
          }
        });
    });
});

module.exports = router;
