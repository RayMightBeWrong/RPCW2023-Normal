var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get("http://localhost:15015/contracts")
        .then(res1 => {
            contracts = res1.data
            nr_contracts = contracts.length
            res.render('index', {contracts: contracts, nr: nr_contracts});
        })
        .catch(err => {
            res.render('error', {error: err, message: "Erro na obtenção dos contratos"})
        })
});

router.get('/:id', function(req, res, next) {
    axios.get("http://localhost:15015/contracts/" + req.params.id)
        .then(res1 => {
            contract = res1.data
            res.render('contract', {contract: contract});
        })
        .catch(err => {
            res.render('error', {error: err, message: "Erro na obtenção dos contratos"})
        })
});

router.get('/inst/:id', function(req, res, next) {
    axios.get("http://localhost:15015/contracts?inst=" + req.params.id)
        .then(res1 => {
            contracts = res1.data
            var nomeInst = ''
            if (contracts.length > 0){
                nomeInst = contracts[0].NomeInstituicao
            }
            res.render('institution', {id: req.params.id, nomeInst: nomeInst, contracts: contracts});
        })
        .catch(err => {
            res.render('error', {error: err, message: "Erro na obtenção dos contratos"})
    })
});

module.exports = router;
