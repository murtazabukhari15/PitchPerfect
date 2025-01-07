const router = require("express").Router();
const playerController = require("../controllers/playerController");

router.route('/players/getAll').get(function (req,res,next) {
    playerController.getAll(req,res,next);
})

router.route('players/addPlayer').post(function(req,res,next){
    playerController.addPlayer(req,res,next)
});

router.route('players/getSepecificTeamPlayers').post(function(req,res,next){
    playerController.getSpecificTeamPlayers(req,res,next)
});

router.route('players/getSpecificPlayer').post(function(req,res,next){
    playerController.getSpecificPlayer(req,res,next)
});

router.route('players/updatePlayer').post(function(req,res,next){
    playerController.updatePlayer(req,res,next)
});

router.route('players/deleteSpecificPlayer').post(function(req,res,next){
    playerController.deleteSpecificPlayer(req,res,next)
});

router.route('players/deleteTeamPlayers').post(function(req,res,next){
    playerController.deleteTeamPlayers(req,res,next)
});

module.exports = router;