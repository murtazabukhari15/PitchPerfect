const router = require("express").Router();
const favteamController = require("../controllers/favTeamController");


router.post("/favTeam/add", function(req,res,next){
    favteamController.addFavTeam(req,res,next);
});

router.route("/favTeam/getAll").get(function(req,res,next){
    favteamController.getAll(req,res,next);
});

router.route("/favTeam/getTeamByEmail").get(function(req,res,next){
    favteamController.getTeamByName(req,res,next);
})

module.exports = router;