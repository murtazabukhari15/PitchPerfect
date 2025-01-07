const {firebase,admin} = require('../firebase');
const db = firebase.firestore();
const seriesModel = require('../models/seriesModel');


exports.getAll = async(req,res,next) => {
    try{
        let data = req.data;
        const seriesArray = [];
        db.collection("series")
        .get()
        .then(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({status:false, Message: "No record Found"});
            }else{
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const series = new seriesModel(data.team1, data.team2, data.type, data.datetime,`${data.team1} vs ${data.team2}`,data.linkCode, data.email);
                    seriesArray.push(series);
                })
                res.status(200).send({status: true, Message: seriesArray});
            }
        });
    }catch(e){
        res.status(200).send({status: false, Message: e});
    }
};

exports.addSeries = async(req, res, next) => {
    try{
        let data = req.body;
        db.collection("series")
        .add({
            team1: data.team1,
            team2: data.team2,
            type: data.type,
            datetime: data.matchDate,
            userId: data.email? data.email: null,
            linkCode: data.linkCode
        })
        .then(docRef =>{
            console.log(docRef.id);
            res.status(200).send({status: true, Message: "Series created Succesfully"});
        })
    }catch(e){
        res.status(200).send({status: false, Message: e});
    }

};

exports.getByLinkCode = async(req,res,next)=> {
    try{
        let data = req.body;
        let series;
        db.collection("series")
        .where("linkCode","=", data.linkCode)
        .get()
        .then(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({status:false, Message: "No record Found"});
            }else{
                snapshot.forEach(doc => {
                    const data = doc.data();
                    series = new seriesModel(data.team1, data.team2, data.type, data.datetime,`${data.team1} vs ${data.team2}`,data.linkCode, data.email);
                })
                res.status(200).send({status: true, Message: series});
            }
        });
    }catch(e){
        res.status(200).send({status: false, Message: e});
    } 
}

exports.getAllUserSeries = async(req,res,next) => {
    try{
        let data = req.body;
        const seriesArray = [];
        db.collection("series")
        .where("userId","=", data.email)
        .get(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({status:false, Message: "No record Found"});
            }else{
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const series = new seriesModel(data.team1, data.team2, data.type, data.datetime,`${data.team1} vs ${data.team2}`, data.linkCode, data.email);
                    seriesArray.push(series);
                })
                res.status(200).send({status: true, Message: seriesArray});
            }
        });
    }catch(e){
        res.status(200).send({status: false, Message: e});
    }
};

