const {firebase,admin} = require('../firebase');
const db = firebase.firestore();

exports.addFavTeam = async( req,res, next)=>{
    try{
        var teamData =req.body;
        db.collection("fav_team")
       // .where("email", "=",teamData.email)
        .get(snapshot=>{
            if(snapshot.empty){
                db.collection("fav_team").add({
                    email: teamData.email,
                    team: teamData.team
                }).then(docRef =>{
                    console.log(docRef.id);
                    res.status(200).send({status: true, Message: "Team successfully added"});
                })
            }else{
                const batch = db.batch();
                var obj = {
                    email: teamData.email,
                    team: teamData.team
                }
                snapshot.forEach((doc) => {
                    batch.set(doc.ref, obj); // Replace the entire document
                });

                // Commit the batch operation
                batch.commit();
                res.status(200).send({status: true, Message: "Fav Team updated Successfully"});

            }
        })
        
    }catch(e){
        console.log("Exception in adding teams");
        res.status(200).send({status: false , Message: "Exception in creating new teams"})
        
    }
}

exports.getAll = async(req,res,next)=>{
    const teamArray = [];

    db.collection("fav_team")
    .get()
    .then(snapshot=> {
        if(snapshot.empty){
            res.status(200).send({status: false, Message: "No Data Found"})
        }else{
            snapshot.forEach(doc => {
                const data = doc.data();
                const team =  {email:data.email, team:data.team};
                teamArray.push(team);
            })
            res.status(200).send({status: true, Message: teamArray});
        }
    })

}

exports.getTeamByName = async(req,res,next)=>{
    var name = req.body;
    var team;
    try{
        db.collection("fav_team")
        .where("email", "=",name.email)
        .get()
        .then(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({status: false, Message: "No record Found"});
            }else{
                snapshot.forEach(doc=>{
                    var data = doc.data();
                    team = {email:data.email, team: data.team};
                });
                res.status(200).send({status:true, Message: team});
            }
        })
    }catch(e){
        res.status(200).send({status: false, Message: "Exception in getting team by name"});
    }
    
}