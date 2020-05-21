const express = require('express'),
  router = express.Router(),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  keys = require('../config/dev'),
  passport = require('passport');

const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const UserModel = require('../models/UserModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid) {
    return res.staus(400).json(errors);
  }

  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if(user) {
        errors.email = 'Email already taken';
        return res.status(400).json(errors);
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
  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid) {
    return res.staus(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  UserModel.findOne({ email: email })
    .then(user => {
      if(!user) {
        errors.email = "User not found";
        return res.status(404).json({email: 'User not found'})
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {

            const payload = { id: user.id, name: user.name }
            jwt.sign(payload, keys.secret, { expiresIn: 86400 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              }
            );
          } else {
            errors.password = 'Invalid password'
            return res.status(400).json(errors);
          }
        });
    });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  })
});

module.exports = router;
