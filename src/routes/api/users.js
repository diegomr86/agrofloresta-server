var mongoose = require('mongoose'),
  router = require('express').Router(),
  passport = require('passport'),
  auth = require('../auth'),
  slugify = require('slugify'),
  populate = require('../utils').populate,
  sendMail = require('../utils').sendMail,
  User = mongoose.model('User'),
  Plant = mongoose.model('Plant'),
  QuizAnswer = mongoose.model('QuizAnswer'),
  Topic = mongoose.model('Topic'),
  Post = mongoose.model('Post'),
  Guide = mongoose.model('Guide'),
  Comment = mongoose.model('Comment'),
  Like = mongoose.model('Like'),
  ObjectId = mongoose.Types.ObjectId,
  md5 = require('md5');

router.get('/users', auth.curator, function(req, res) {
  var filters = {}
  if (req.query.role && req.query.role != 'user') {
    filters = {
      roles: req.query.role
    }
  }

  User.find(filters).populate(populate(req)).exec(function(err, users) {
    if (err) {
      res.status(422).send('Erro:: ' + err);
    } else {
      res.json(users);
    }
  });
});

router.get('/users/:id', auth.authenticated, function(req, res, next) {
  User.findById(req.params.id).then(function(user) {
    if (!user) {
      return res.sendStatus(401);
    }

    return res.json(user);
  }).catch(next);
});

router.get('/currentuser', auth.authenticated, function(req, res, next) {
  User.findById(req.payload.id).then(function(user) {
    if (!user) {
      return res.sendStatus(401);
    }
    return res.json(user.toAuthJSON());
  }).catch(next);
});


router.post('/users', auth.curator, function(req, res, next) {
  var user = new User();

  user.email = req.body.email
  user.name = req.body.name
  user.bio = req.body.bio
  user.phone = req.body.phone
  user.address = req.body.address
  user.roles = req.body.roles
  user.facebook_id = req.body.facebook_id

  if (req.payload.roles.includes('admin')) {
    user.roles = req.body.roles
  } else {
    user.roles = req.body.roles.filter(value => {
      value == 'admin'
    })
  }

  user.setPassword(req.body.password);

  user.save().then(function() {
    return res.send(user);
  }).catch(next);
});


router.post('/users/login', function(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({
      errors: {
        email: "campo obrigatório"
      }
    });
  }

  if (!req.body.password) {
    return res.status(422).json({
      errors: {
        password: "campo obrigatório"
      }
    });
  }

  passport.authenticate('local', {
    session: false
  }, function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (user) {
      user.token = user.generateJWT();
      return res.json(user.toAuthJSON());
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.get('/logout', auth.authenticated, function(req, res){
  req.logout();
  res.json('ok');
});

router.post('/users/register', function(req, res) {
  var user = new User();

  user.email = req.body.email
  user.name = req.body.name
  user.bio = req.body.bio
  user.phone = req.body.phone
  user.address = req.body.address
  user.facebook_id = req.body.facebook_id
  user.roles = ['user']

  user.setPassword(req.body.password);

  user.save().then(function() {
    return res.send(user);
  }).catch(e => {
    res.status(422).json(e)
  });
});

router.post('/users/forgot_password', function(req, res) {
  User.findOne({
    email: req.body.email
  }).then(function(user) {
    if (user && user._id) {
      var code = Math.random().toString(36).slice(-4)
      user.passwordCode = code
      user.save().then(function() {
        sendMail(req.body.email, "Código para atualização da senha de " + req.body.email, "<p>Olá, seu código para atualizar sua senha na Rede Agroflorestal é: <strong>" + code + "</strong></p>").then(info => {
          return res.send(true);
        }).catch(e => {
          res.status(500).json(e)
        })
      })
    } else {
      return res.status(422).json({
        erros: {
          email: "not_found"
        }
      });
    }
  })
})

router.post('/users/validate_code', function(req, res) {
  console.log('req.body');
  console.log(req.body);
  if (req.body.email && req.body.passwordCode) {
    User.findOne({
      email: req.body.email,
      passwordCode: req.body.passwordCode
    }).then(function(user) {
      if (user && user._id) {
        return res.send(true);
      } else {
        return res.send(false);
      }
    })
  }
})

router.post('/users/update_password', function(req, res) {
  if (req.body.email && req.body.passwordCode && req.body.password) {
    User.findOne({
      email: req.body.email,
      passwordCode: req.body.passwordCode
    }).then(function(user) {
      if (user && user._id) {
        user.setPassword(req.body.password)
        return user.save().then(u => {
          return res.send(true);
        })
      } else {
        return res.send(false);
      }
    })
  }
})

router.put('/users/:id', auth.authenticated, function(req, res, next) {
  var id = req.params.id
  if (!req.payload.roles.includes('admin') && !req.payload.roles.includes('curator')) {
    id = req.payload.id
  }

  User.findById(id).then(function(user) {

    user.email = req.body.email
    user.name = req.body.name
    user.bio = req.body.bio
    user.phone = req.body.phone
    user.address = req.body.address
    user.picture = req.body.picture
    user.profileCompleted = true


    if (req.payload.roles.includes('admin')) {
      user.roles = req.body.roles
    }

    if (req.body.password) {
      user.setPassword(req.body.password);
    }

    user.save().then(function() {
      return res.send(user.toAuthJSON());
    }).catch(next);
  })
});

router.delete('/users/:id', auth.curator, function(req, res) {
  User.findOne({
    _id: req.params.id
  }).exec(function(err, user) {
    if (err) {
      res.status(422).send('Ocorreu um erro ao carregar o item: ' + err.message);
    } else {
      if (req.payload.id == req.params.id) {
        res.status(422).send('Não é possível excluír você mesmo!');
      } else {
        user.remove();
        res.send(user);
      }
    }
  })
});

router.get('/is_alive', function(req, res) {
  User.count().exec(function(err) {
    if (!err) {
      res.send('yep')
    }
  });
});

router.get('/fix_users', function(req, res) {
  const fs = require('fs');

  let rawdata = fs.readFileSync('../agrofloresta-import/users_data.json', 'utf8');
  let json_data = JSON.parse(rawdata);
  var users = []
  for (let index in json_data) {
    var item = json_data[index]
    if (item.name) {
      var user = new User();

      user._id = (new ObjectId(md5(item._id).substring(8)))
      user.email = item.name.toLowerCase()
      if (item.username) {
        user.name = item.username
      } else {
        var name = item.name.split('@')
        if (name.length > 2) {
          user.name = name[name.length - 2]
        } else {
          user.name = name[0]
        }
      }

      user.bio = item.bio
      user.phone = item.phone
      user.picture = fixPicture(item.picture)
      var city = ""
      var state = ""
      if (item.location) {
        var loc = item.location.split('-')
        city = loc[0].trim()
        if (loc.length > 1) {
          state = loc[loc.length - 1].trim()
        } else {
          loc = item.location.split(' ')
          if (loc.length > 1) {
            loc[loc.length - 1].trim()
          }
        }
      }
      var location = null
      if (item.position && item.position.latitude) {
        location = {
          type: "Point",
          coordinates: []
        }
        location.coordinates.push(item.position.latitude)
        location.coordinates.push(item.position.longitude)
      }
      user.address = {
        city: city,
        uf: state,
        location: location
      }
      user.roles = ["user"]
      user.facebook_id = item.facebook_id

      user.setPassword("agrofloresta");
      users.push(user)
      user.save().then(function(res) {
        console.log(res._id + " criado!");
      })


    }
  }
  res.send(users);
});

router.get('/fix_plants', async function(req, res) {
  const fs = require('fs');

  let rawdata = fs.readFileSync('../agrofloresta-import/agrofloresta_data.json', 'utf8');
  let json_data = JSON.parse(rawdata);
  var data = []
  var check = {}
  json_data.forEach((item) => {
    if (check[item.name]) {
      Object.keys(item).forEach(key => {
        if (item[key] && item[key] != "") {
          if (key != 'picture' || (item.picture && item.picture.url && item.picture.url.indexOf("http") == 0)) {
            check[item.name][key] = item[key]
          }
        }
      })
    } else {
      check[item.name] = item
    }
  })
  json_data = Object.values(check)
  for (let index in Object.values(check)) {
    var item = json_data[index]
    if (item.type == 'plant') {

      var plant = new Plant();
      plant._id = (new ObjectId(md5(item.name).substring(8)))
      if (item.scientific_name) {
        if (Array.isArray(item.scientific_name)) {
          item.scientific_name = item.scientific_name[0]
        }
        plant.slug = slugify(item.scientific_name).toLowerCase()

      } else {
        plant.slug = slugify(item.name).toLowerCase()
      }

      plant.name = item.name
      plant.scientific_name = item.scientific_name
      plant.popular_name = item.popular_name
      plant.category = item.category
      plant.description = item.description
      plant.source = item.source
      plant.picture = fixPicture(item.picture)
      plant.pictures = item.pictures
      plant.climate = item.climate
      plant.origin = item.origin
      plant.height = item.height
      plant.luminosity = item.luminosity
      plant.ciclo = item.ciclo
      plant.synonymy = item.synonymy
      plant.harvest_time = item.harvest_time
      plant.spacing = item.spacing
      plant.companion_plants = item.companion_plants
      plant.additional_fields = item.additional_fields
      plant.medicinal = item.medicinal
      plant.stratum = item.stratum
      plant.cycle = item.cycle
      plant.warning = item.warning
      if (item.user_id) {
        plant.user = (new ObjectId(md5(item.user_id).substring(8)))
      }
      console.log('plant.name');
      console.log(plant.name);
      plant = await plant.save().catch(e => console.log(e))

      data.push(plant)
    }
  }
  res.send(data);
});

router.get('/fix_quiz_answers', async function(req, res) {
  const fs = require('fs');

  let rawdata = fs.readFileSync('../agrofloresta-import/agrofloresta_data.json', 'utf8');
  let json_data = JSON.parse(rawdata);
  var data = []
  for (let index in json_data) {
    var item = json_data[index]
    if (item.type == 'quiz_answer') {
      var quiz_answer = new QuizAnswer();
      quiz_answer.plant = (new ObjectId(md5(item.plant).substring(8)))
      quiz_answer.answer = item.answer
      quiz_answer.field = item.field
      quiz_answer.createdAt = item.$createdAt
      if (item.user_id) {
        quiz_answer.user = (new ObjectId(md5(item.user_id).substring(8)))
      }
      quiz_answer = await quiz_answer.save()

      data.push(quiz_answer)
    }
  }
  res.send(data);
});

router.get('/fix_topics', async function(req, res) {
  const fs = require('fs');

  let rawdata = fs.readFileSync('../agrofloresta-import/agrofloresta_data.json', 'utf8');
  let json_data = JSON.parse(rawdata);
  var data = []
  for (let index in json_data) {
    var item = json_data[index]
    if (item.type == 'topic') {
      var topic = new Topic();

      topic.title = item.title
      topic.content = item.content
      topic.tags = item.tags

      topic.createdAt = item.created_at
      topic.updatedAt = item.updated_at
      if (item.user_id) {
        topic.user = (new ObjectId(md5(item.user_id).substring(8)))
      }
      topic = await topic.save()

      if (item.comments) {
        item.comments.filter(comment => comment.user_id).map(comment => {
          var comment = new Comment({
            user: (new ObjectId(md5(comment.user_id).substring(8))),
            message: comment.message,
            topic: topic._id,
            createdAt: comment.created_at
          });
          comment.save()
        })
      }


      data.push(topic)
    }
  }
  res.send(data);
});

router.get('/fix_posts', async function(req, res) {
  const fs = require('fs');

  let rawdata = fs.readFileSync('../agrofloresta-import/agrofloresta_data.json', 'utf8');
  let json_data = JSON.parse(rawdata);
  var data = []
  for (let index in json_data) {
    var item = json_data[index]
    if (item.type == 'post') {
      var post = new Post();

      post.title = item.title
      post.content = item.content
      post.category = item.category
      if (item.tags && item.tags.length) {
        post.tags = item.tags.map(tag => {
          if (typeof tag == 'object') {
            return tag.value
          } else {
            return tag
          }
        })
      }

      post.picture = fixPicture(item.picture)
      post.url = item.url
      post.oembed = item.oembed
      if (item.start_time && item.start_time != "") {
        post.start_time = new Date(item.start_time)
      }
      if (item.end_time && item.end_time != "") {
        post.end_time = new Date(item.end_time)
      }
      post.location = item.location
      post.score = item.score


      post.createdAt = item.created_at
      post.updatedAt = item.updated_at
      if (item.user_id) {
        post.user = (new ObjectId(md5(item.user_id).substring(8)))
      }
      post = await post.save()

      if (item.comments) {
        item.comments.filter(comment => comment.user_id).map(comment => {
          var comment = new Comment({
            user: (new ObjectId(md5(comment.user_id).substring(8))),
            message: comment.message,
            post: post._id,
            createdAt: comment.created_at
          });
          comment.save()
        })
      }

      if (item.likes) {
        console.log(item.likes);
        item.likes.map(like_item => {
          if (like_item) {
            var like = new Like({
              user: (new ObjectId(md5(like_item).substring(8))),
              post: post._id
            });
            like.save()

          }
        })
      }

      data.push(post)
    }
  }
  res.send(data);
});

router.get('/fix_guides', async function(req, res) {
  const fs = require('fs');

  let rawdata = fs.readFileSync('../agrofloresta-import/agrofloresta_data.json', 'utf8');
  let json_data = JSON.parse(rawdata);
  var data = []
  for (let index in json_data) {
    var item = json_data[index]
    if (item.type == 'guide') {
      var guide = new Guide();

      guide.title = item.title
      guide.content = item.content
      if (item.tags && item.tags.length) {
        guide.tags = item.tags.map(tag => {
          if (typeof tag == 'object') {
            return tag.value
          } else {
            return tag
          }
        })
      }
      guide.createdAt = item.$createdAt
      if (item.user_id) {
        guide.user = (new ObjectId(md5(item.user_id).substring(8)))
      }
      guide = await guide.save()

      data.push(guide)
    }
  }
  res.send(data);
});

function fixPicture(picture) {
  if (picture && picture.url) {
    Object.keys(picture).forEach(key => {
      if (picture[key] && picture[key].indexOf('static/') == 0) {
        picture[key] = picture[key].replace('static/', 'uploads/')
      }
    })
  }
  return picture

}

module.exports = router;
