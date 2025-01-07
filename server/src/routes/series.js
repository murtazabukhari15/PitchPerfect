const router = require("express").Router();
const seriesController = require('../controllers/seriesController');

router.route('/series/getSeries').get(function(req,res,next){
    seriesController.getAll(req,res,next);
});

router.route('/series/addSeries').post(function(req,res,next){
    seriesController.addSeries(req,res,next);
})

router.route('/series/getAllByLinkCode').post(function(req,res,next){
    seriesController.getByLinkCode(req,res,next);
});

router.route('/series/getAllSeriesByUser').post(function(req,res,next){
    seriesController.getAllUserSeries(req,res,next);
})

module.exports = router;