const {firebase,admin} = require('../firebase');
const db = firebase.firestore();
const teamModel = require("../models/teamModel");

exports.addTeam = async( req,res, next)=>{
    try{
        var teamData =req.body;
        db.collection("teams")
        .where("teamName", "=",teamData.teamName)
        .get(snapshot=>{
            if(snapshot.empty){
                db.collection("teams").add({
                    teamName: teamData.teamName,
                    teamNationality: teamData.teamNationality
                }).then(docRef =>{
                    console.log(docRef.id);
                    res.status(200).send({Status: true, Message: "Team successfully added"});
                })
            }else{
                res.status(200).send({Status: false , Message: "Team already exists"});

            }
        })
        
    }catch(e){
        console.log("Exception in adding teams");
        res.status(200).send({Status: false , Message: "Exception in creating new teams"})
        
    }
}

exports.getAll = async(req,res,next)=>{
    const teamArray = [];

    db.collection("teams")
    .get()
    .then(snapshot=> {
        if(snapshot.empty){
            res.status(200).send({Status: false, Message: "No Data Found"})
        }else{
            snapshot.forEach(doc => {
                const data = doc.data();
                const team = new teamModel(data.teamName, data.teamNationality);
                teamArray.push(team);
            })
            res.status(200).send({Status: true, Message: teamArray});
        }
    })

}

exports.getTeamByName = async(req,res,next)=>{
    var name = req.body;
    var team;
    try{
        db.collection("teams")
        .where("teamName", "=",name.teamName)
        .get()
        .then(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({Status: false, Message: "No record Found"});
            }else{
                snapshot.forEach(doc=>{
                    var data = doc.data();
                    team = new teamModel(data.teamName, data.teamNationality);
                });
                res.status(200).send({Status:true, Message: team});
            }
        })
    }catch(e){
        res.status(200).send({Status: false, Message: "Exception in getting team by name"});
    }
    
}