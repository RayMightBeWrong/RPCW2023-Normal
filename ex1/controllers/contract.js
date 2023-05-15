const { ObjectId } = require('mongoose')
var contract = require('../models/contract')

//Promise.all([query1, query2]).then( ([res1, res2]) => { return res1 + res2 })
//                             .catch( err => { return err } )

module.exports.list = () => {
    return contract.find({})
                .then(docs => {
                    return docs
                })
                .catch(erro => {
                    return erro
                })
}

module.exports.getContract = id => {
    return contract.findOne({_id: id})
                .then(docs => {
                    return docs
                })
                .catch(erro => {
                    return erro
                })
}

module.exports.addContract = e => {
    return contract.create(e)
                .then(docs => {
                    return docs
                })
                .catch(erro => {
                    return erro
                })
}

module.exports.updateContract = e => {
    return contract.updateOne({id: e.id}, e)
                .then(docs => {
                    return docs
                })
                .catch(erro => {
                    return erro
                })
}

module.exports.deleteContract = id => {
    return contract.deleteOne({_id: id})
                .then(docs => {
                    return docs
                })
                .catch(erro => {
                    return erro
                })
}

module.exports.contractsByYear = year => {
    regex = '......' + year
    return contract.find({DataInicioContrato: {$regex: regex}})
                        .then(docs => {
                            return docs
                        })
                        .catch(erro => {
                            return erro
                        })
}

module.exports.contractsByInstitution = inst => {
    return contract.find({NIPCInstituicao: inst})
                        .then(docs => {
                            return docs
                        })
                        .catch(erro => {
                            return erro
                        })
}

module.exports.getCourses = () => {
    return contract.aggregate([ {$group: {_id: '$Curso'}} ])
                        .then(docs => {
                            return docs
                        })
                        .catch(erro => {
                            return erro
                        })
}

module.exports.getInstitutions = () => {
    return contract.aggregate([{$group: {_id: '$NIPCInstituicao', Instituicao: { "$first": "$NomeInstituicao"}}} ])
                        .then(docs => {
                            return docs
                        })
                        .catch(erro => {
                            return erro
                        })
}