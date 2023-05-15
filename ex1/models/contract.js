var mongoose = require('mongoose')

var entityModel = new mongoose.Schema({
    NomeInstituicao: String,
    NIPCInstituicao: Number,
    NomeTitularContrato: String,
    CienciaID: String,
    ORCID: String,
    CienciaVitae: String,
    Carreira_RPN: String,
    Categoria_RPN: String,
    Vinculo_RPN: String,
    RegimePrestacaoServico: String,
    DataInicioContrato: String,
    DataFimContrato: String,
    ETIremunerado: Number,
    ProcedimentoVinculacao: String,
    AreasInvestigacao: String,
    NivelFormação: String,
    InstituicaoEnsino: String,
    PaisInstituição: String,
    AnoDiploma: Number,
    Curso: String,
    AreaCNAEF: String,
    AreaFORD: String,
    ProvasAgregacao: Number,
    TituloEspecialista: Number,
    ProvasCoordenacao: String,
    ProvasAptidao: String
}, { collection: 'contracts' })

module.exports = mongoose.model('contract', entityModel)

// db.contracts.aggregate([{$match: {InstituicaoEnsino: 'Universidade do Minho'}}])
// db.contracts.aggregate([ {$group: {_id: '$AreaCNAEF'}} ]).sort({ _id: 1 })
// db.contracts.find({ DataInicioContrato: { $regex: /......2019/ } }).count()
// db.contracts.aggregate([ {$group: {_id: '$InstituicaoEnsino', count: {$sum: 1}}} ])