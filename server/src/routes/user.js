const router = require("express").Router();
const userController = require('../controllers/userController');

router.route('/users/getAll').get(function(req,res,next){
    userController.getAllUsers(req,res,next);
});


router.route("/users/login").post(function(req,res,next){
    userController.login(req,res,next);
})

router.route("/users/register").post(function(req,res,next){
    userController.register(req,res,next);
})

router.route("/users/forgetPassword").post(function(req,res,next){
    userController.forgetPassword(req,res,next);
});

router.route("/users/otp").post(function(req,res,next){
    userController.generateOtp(req,res,next);
});

router.route("/users/verifyOtp").post(function(req,res,next){
    userController.verifyOtp(req,res,next);
})

router.route("/users/getFavTeam").post(function(req,res,next){
    userController.getFavTeamByEmail(req,res,next);
})

router.route("/users/addOrUpdateFavTeam").post(function(req,res,next){
    userController.addOrUpdateFavTeam(req,res,next);
});

router.route("/users/deleteFavTeamByEmail").post(function(req,res,next){
    userController.deleteFavTeamByEmail(req,res,next);
});


router.route("/users/getCountries").get(function(req,res,next){
    userController.getCountries(req,res,next);
})

module.exports = router;