const {firebase,admin} = require('../firebase');
const db = firebase.firestore();
const leagueModel = require('../models/leagueModel');


exports.getAll = async(req,res,next) => {
    try{
        let data = req.data;
        const leagueArray = [];
        db.collection("leagues")
        .get()
        .then(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({status:false, Message: "No record Found"});
            }else{
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const league = new leagueModel(data.name, data.linkCode, data.series);
                    leagueArray.push(league);
                })
                res.status(200).send({status: true, Message: leagueArray});
            }
        });
    }catch(e){
        res.status(200).send({status: false, Message: e});
    }
};

exports.addleague = async(req, res, next) => {
    try{
        let data = req.body;
        db.collection("leagues")
        .add({
            name: data.name,
            linkCode: data.linkCode,
            series: data.series
        })
        .then(docRef =>{
            console.log(docRef.id);
            res.status(200).send({status: true, Message: "league created Succesfully"});
        })
    }catch(e){
        res.status(200).send({status: false, Message: e});
    }

};

exports.getByLinkCode = async(req,res,next)=> {
    try{
        let data = req.body;
        let league;
        db.collection("leagues")
        .where("linkCode","=", data.linkCode)
        .get()
        .then(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({status:false, Message: "No record Found"});
            }else{
                snapshot.forEach(doc => {
                    const data = doc.data();
                    league = new leagueModel(data.name, data.linkCode, data.series);
                })
                res.status(200).send({status: true, Message: league});
            }
        });
    }catch(e){
        res.status(200).send({status: false, Message: e});
    } 
}

exports.getAllSerleague = async(req,res,next) => {
    try{
        let data = req.body;
        const leagueArray = [];
        db.collection("leagues")
        .where("email","=", data.email)
        .get(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({status:false, Message: "No record Found"});
            }else{
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const league = new leagueModel(data.name, data.linkCode, data.series);
                    leagueArray.push(league);
                })
                res.status(200).send({status: true, Message: leagueArray});
            }
        });
    }catch(e){
        res.status(200).send({status: false, Message: e});
    }
};

