const router = require("express").Router();
const teamController = require("../controllers/teamController");


router.post("/team/add", function(req,res,next){
    teamController.addTeam(req,res,next);
});

router.route("/team/getAll").get(function(req,res,next){
    teamController.getAll(req,res,next);
});

router.route("/team/getTeamByName").get(function(req,res,next){
    teamController.getTeamByName(req,res,next);
})

module.exports = router;