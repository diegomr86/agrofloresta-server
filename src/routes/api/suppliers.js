var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router(),
  slugify = require('slugify')
  auth = require('../auth'),
  populate = require('../utils').populate,
  request = require('request'),
  Supplier = mongoose.model('Supplier'),
  User = mongoose.model('User');

router.get('/', auth.manager, function(req, res) {
  Supplier.find({}).exec(function(err, seeds) {
    if (err) {
      res.status(422).send('Ocorreu um erro ao carregar a lista: ' + err.message);
    } else {
      res.json(seeds);
    }
  });
});


router.get('/search', auth.manager, function(req, res) {
  Supplier.findOne({
    name: req.query.name
  }).exec(function(err, seed) {
    if (err) {
      res.status(422).send('Ocorreu um erro ao carregar o item: ' + err.message);
    } else {
      res.json(seed);
    }
  });
});

router.get('/:id', auth.manager, function(req, res) {
  Supplier.findOne({
    _id: req.params.id
  }).populate(populate(req)).exec(function(err, seed) {
    if (err) {
      res.status(422).send('Ocorreu um erro ao carregar o item: ' + err.message);
    } else {
      res.json(seed);
    }
  });
});

router.post('/', auth.manager, function(req, res) {
  var params = req.body
  var newSupplier = new Supplier(params);
  newSupplier.cnpj = newSupplier.cnpj.replace(/\D/g, '')

  request('https://www.receitaws.com.br/v1/cnpj/' + newSupplier.cnpj, {
    json: true
  }, (err, resp, body) => {
    if (err) {
      res.status(422).send('Ocorreu um erro ao cadastrar: ' + err.message);
    } else if (body.status == 'ERROR') {
      res.status(422).send(body.message);
    } else {
      newSupplier.name = body.fantasia
      if (!newSupplier.name) {
        newSupplier.name = body.nome
      }
      newSupplier.slug = slugify(newSupplier.name).toLowerCase()
      newSupplier.corporate_name = body.nome
      if (body.atividade_principal && body.atividade_principal.length) {
        newSupplier.description = body.atividade_principal[0].text
      }
      newSupplier.address = {
        uf: body.uf,
        city: body.municipio,
        postal_code: body.cep,
        address: [body.logradouro, body.numero, body.bairro].join(', ')
      }
      if (body.email) {
        newSupplier.email = body.email
      }
      if (body.telefone) {
        newSupplier.phones = body.telefone.split(' / ')
      }
      newSupplier.contact_persons = []
      if (body.qsa && body.qsa.length) {
        body.qsa.forEach(contact_person => {
            newSupplier.contact_persons.push({
              name: contact_person.nome,
              position: contact_person.qual.split('-')[1]
            })
        })
      }

      newSupplier.legal_format = body.natureza_juridica
      newSupplier.tax_regime = body.porte
      newSupplier.subscription = body.abertura
      newSupplier.save(function(err, supplier) {
        if (err) {
          if (err.message.includes('duplicate')) {
            res.status(422).send('Este fornecedor já está cadastrado');
          } else {
            res.status(422).send('Ocorreu um erro ao salvar: ' + err.message);
          }
        } else {
          res.send(supplier);
        }
      });
    }
  });

});

router.put('/:id', auth.manager, function(req, res) {
  params = req.body
  Supplier.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: params
  }, {
    upsert: true
  }, function(err, newSupplier) {
    if (err) {
      res.status(422).send('Ocorreu um erro ao atualizar: ' + err.message);
    } else {
      res.send(newSupplier);
    }
  });
});

router.delete('/:id', auth.manager, function(req, res) {

  Supplier.findOne({
    _id: req.params.id
  }).populate('users').exec(function(err, supplier) {
    if (err) {
      res.status(422).send('Ocorreu um erro ao carregar o item: ' + err.message);
    } else {
      supplier.users.forEach(user => {
        user.remove();
      })
      // if (supplier.collections && supplier.collections.length) {
      //   res.status(422).send('Não é possível excluír! Existem coletas cadastradas para este grupo');
      // } else if (supplier.collection_areas && supplier.collection_areas.length) {
      //   res.status(422).send('Não é possível excluír! Existem áreas de coleta cadastradas para este grupo');
      // } else if (supplier.stock_ins && supplier.stock_ins.length) {
      //   res.status(422).send('Não é possível excluír! Existem entradas no estoque cadastradas para este grupo');
      // } else if (supplier.collectors_requests && supplier.collectors_requests.length) {
      //   res.status(422).send('Não é possível excluír! Existem pedidos para coletores cadastrados para este grupo: ('+supplier.collectors_requests.map(c => 'Pedido '+ c.code).join(', ') +')');
      // } else if (supplier.potential_lists && supplier.potential_lists.length) {
      //   res.status(422).send('Não é possível excluír! Existem listas de potencial cadastradas para este grupo: ('+supplier.potential_lists.map(p => 'Lista '+ p.code).join(', ') +')');
      // } else if (supplier.seeds_matrixes && supplier.seeds_matrixes.length) {
      //   res.status(422).send('Não é possível excluír! Existem matrixes de semente relacionadas a este grupo');
      // } else if (supplier.seeds_houses && supplier.seeds_houses.length) {
      //   res.status(422).send('Não é possível excluír! Existem grupos de coletores relacionados a este grupo: ('+supplier.seeds_houses.map(p => p.name).join(', ') +')');
      // } else {
      supplier.remove();
      res.send(supplier);
      // }
    }
  })

});

module.exports = router;
