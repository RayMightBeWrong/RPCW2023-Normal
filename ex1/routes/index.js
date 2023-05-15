var express = require('express');
var contracts = require('../controllers/contract')
var router = express.Router();

router.get('/contracts', function(req, res, next) {
    if ('year' in req.query){
        contracts.contractsByYear(req.query['year'])
            .then(l => res.status(200).json(l))
            .catch(error => res.status(520).json({error: error}))
    }
    else if ('inst' in req.query){
        contracts.contractsByInstitution(req.query['inst'])
            .then(l => res.status(200).json(l))
            .catch(error => res.status(520).json({error: error}))
    }
    else{
        contracts.list()
            .then(l => res.status(200).json(l))
            .catch(error => res.status(520).json({error: error}))
    }
});

router.get('/contracts/courses', function(req, res, next) {
    contracts.getCourses()
      .then(p => res.status(200).json(p))
      .catch(error => res.status(520).json({error: error}))
});

router.get('/contracts/institutions', function(req, res, next) {
    contracts.getInstitutions()
      .then(p => res.status(200).json(p))
      .catch(error => res.status(520).json({error: error}))
});

router.get('/contracts/:id', function(req, res, next) {
    contracts.getContract(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(error => res.status(520).json({error: error}))
});

router.post('/contracts', function(req, res, next) {
    contracts.addContract(req.body)
        .then(p => {
          res.status(201).json(p)
        })
        .catch(error => {
          res.status(530).json({error: error})
        })
});

router.delete('/contracts/:id', function(req, res, next) {
    contracts.deleteContract(req.params.id)
        .then(p => {
            res.status(200).json(p)
        })
        .catch(error => {
            res.status(525).json({error: error})
        })
  });

module.exports = router;