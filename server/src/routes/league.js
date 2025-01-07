const router = require("express").Router();
const leagueController = require('../controllers/leagueController');

router.route('/league/getleague').get(function(req,res,next){
    leagueController.getAll(req,res,next);
});

router.route('/league/addleague').post(function(req,res,next){
    leagueController.addleague(req,res,next);
})

router.route('/league/getAllByLinkCode').post(function(req,res,next){
    leagueController.getByLinkCode(req,res,next);
});

router.route('/league/getAllleagueByUser').post(function(req,res,next){
    leagueController.getAllUserleague(req,res,next);
})

module.exports = router;