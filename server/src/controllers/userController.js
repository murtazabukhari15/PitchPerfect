const {firebase,admin} = require('../firebase');
const Countries = require('../models/countriesModel');
const FavTeam = require('../models/favTeamModel');
const db = firebase.firestore();
var emailOTP = require('../emailService');
const User = require('../models/userModel');


exports.getAllUsers = async (req, res, next) => {
    try {
        var userArray = [];
        db.collection("users").get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    const data = doc.data();
                    const user = new User(data.email, data.password, data.userType);
                    userArray.push(user);


                });
                res.status(200).send(userArray);
            })
    } catch (e) {
        console.log(e);

    }
}

exports.login = async (req, res, next) => {
    try {
        var email = req.body.email;
        var password = req.body.password;
        db.collection("users")
            .where('email', '=', email)
            .where('password', '=', password)
            .get()
            .then(
                snapshot => {
                    if (snapshot.empty) {
                        console.log("no data found");
                        res.status(404).send({ Status: false, Message: "Invalid Credentials" });
                    } else {
                        var userData = {};
                        var user = new User();
                        snapshot.forEach(doc => {
                            userData = doc.data();
                            user.email = userData.email;
                            user.userType = userData.userType;
                            user.password = userData.password;
                        });
                        res.status(200).send({ Status: true, Message: "Login SuccessFull", Data: user });
                    }
                }
            )
    } catch (e) {
        console.log(e);
        res.status(100).send(e);
    }
}

exports.register = async (req, res, next) => {
    try {
        var registrationData = req.body;
        db.collection("users")
            .where('email', '=', registrationData.email)
            .get()
            .then(
                snapshot => {
                    if (snapshot.empty) {
                        db.collection("users").add({
                            email: registrationData.email,
                            password: registrationData.password,
                            userType: "2"
                        })
                            .then(docRef => {
                                res.status(200).send({ Status: true, Message: "Registration Successfull", Data: docRef.id })
                            })
                    } else {
                        res.status(200).send({ Status: false, Message: "Email already registered" });
                    }
                }
            )

    } catch (e) {
        console.log(e);
        res.status(404).send({ Status: false, Message: e, Data: [] });
    }
}

exports.forgetPassword = async (req, res, next) => {
    try {
        let data = req.body;
        db.collection("user")
        .where("email","=",data.email)
        .get()
        .then(snapshot=>{
            if(snapshot.empty){
                res.status(200).send({Status:false, Message: "Invalid Email"});
            }else{
                snapshot.foreach(async doc=>{
                    await doc.ref.update({
                        password: data.newPassword
                    })
                });
                res.status(200).send({Status:true, Message: `Password of ${doc.email} updated successfully`});
            }
        })
        
        

    } catch (e) {
        console.log(e);
        res.status(200).send({ Status: false, Message: e });

    }
}

exports.generateOtp = async (req, res, next) => {
    try {
        let otpData = req.body;
        let randomOtp = Math.floor(1000 + Math.random() * 9000);
        let postData = {
            otp: randomOtp,
            email: otpData.email,
            isUsed: false
        };
        db.collection("users")
        .where("email", "=", postData.email)
        .get()
        .then(snapshot => {
            if(snapshot.empty){
                console.log("no email address found against req",postData.email);
                res.status(200).send({Status: false, Message: "Email address does not exists"});
            }else{
                db.collection("user_otp").add({
                    isUsed: postData.isUsed,
                    email: postData.email,
                    otp: postData.otp,
                    createdDate: admin.firestore.Timestamp.now()
                })
                    .then(docRef => {
                        let data = {
                            otp: postData.otp,
                            userName: postData.email
                        }
                        emailOTP(data.userName, "otp", `PLEASE ENTER ${data.otp} TO CONTINUE`);
                        res.status(200).send({ Status: true, Message: data });
                    })
            }
        })
        

    } catch (e) {
        console.log('Exception in otp generation', e);
        res.status(200).send({ Status: false, Message: e });
    }
}

exports.verifyOtp = async(req,res,next)=> {
    try{
        let data = req.body;
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0); // Set to start of the day

        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999); // Set to end of the day

        const startTimestamp = admin.firestore.Timestamp.fromDate(todayStart);
        const endTimestamp = admin.firestore.Timestamp.fromDate(todayEnd);
        db.collection("user_otp")
        // .where("userName", "=", data.email)
        .where("createdDate", ">=", startTimestamp)
        .where("createdDate", "<=", endTimestamp)
        // .where("otp", "=", data.otp)
        // .where("isUsed", "=", false)
        .get()
        .then(snapshot=>{
           if(snapshot.empty){
               res.status(200).send({Status:false, Message:"Invalid OTP, Please send otp again"});
           }else{
            snapshot.forEach(async doc => {
                var otpData = doc.data();
                if(otpData.otp == data.otp && otpData.email == data.email && otpData.isUsed == false){
                    await doc.ref.update({
                        isUsed: true
                    })
                    .then(
                        res.status(200).send({Status: true, Message: "OTP MATCHED"})
                    );
                }else{
                    if(otpData.otp != data.otp){
                        res.status(200).send({Status:false, Message:"Invalid OTP, Please send otp again"});
                    }else if(otpData.isUsed == true){
                        res.status(200).send({Status:false, Message:"OTP already used."});
                    }else{
                        res.status(200).send({Status:false, Message:"Invalid OTP, Please send otp again"});
                    }

                }
            });
             //  res.status(200).send({Status:true, Message: "OTP MATCHED"});
           }
        });
    }catch(e){
        console.log("Exception in verifing otp");
        res.status(200).send({Status:false, Message: e});
        
    }
}

exports.addOrUpdateFavTeam = async(req,res,next)=> {
    try {
        let dataObj = {email:req.body.email, team:req.body.team};
        db.collection("fav_team")
        .where("email",'=',dataObj.email)
        .get()
        .then(data =>{
            if(!data.empty){
                data.forEach(async doc=>{
                    await doc.ref.update({
                        team: dataObj.team
                    }).catch(function(error) {
                        res.send({ Status: false, Message: error });
                    });
                    res.send({ Status: true, Message: 'Data updated' });
                })
                     
            }else{
                db.collection("fav_team")
                .add({email:req.body.email, team:req.body.team})
                .then((data)=>{
                    res.send({ Status: true, Message: 'Data added' });
                }).catch(function(error) {
                    res.send({ Status: false, Message: error });
                });
            }
        }).catch(function(error) {
            res.send({ Status: false, Message: error });
        });
        
    } catch (error) {
        console.log(error);
        res.send({ Status: false, Message: error });
    }
}

exports.getFavTeamByEmail = async(req,res,next)=> {
    try {
        let dataObj = {email:req.body.email};
        db.collection("fav_team")
        .where("email",'=',dataObj.email)
        .get()
        .then(data =>{
            if(!data.empty){
                data.forEach((result)=>{
                    let team = result.data();
                    let favTeamObj = new FavTeam(team.email,team.team);
                    res.send({ Status: true, Message: favTeamObj });
                })
            }else{
                res.send({ Status: true, Message: null });
            }
        });
        
    } catch (error) {
        res.send({ Status: false, Message: error });
    }

}

exports.getCountries = async(req,res,next)=> {
    try {
        var countiresArray = [];
        db.collection("countries").get()
            .then(snapshot => {
                snapshot?.forEach(doc => {
                    const data = doc.data();
                    const country = new Countries(data.name, data.shop, data.url);
                    countiresArray.push(country);
                });
                res.status(200).send({Status:true,Message:countiresArray});
            })
    } catch (error) {
        res.send({ Status: false, Message: error });
    }
}

exports.deleteFavTeamByEmail = async(req,res,next)=> {
    try {
        let dataToDelete = {email:req.body.email};
        db.collection("fav_team").where("email",'=',dataToDelete.email).get().then((querySnapshot)=>{
            querySnapshot?.forEach(function(doc) {
                doc.ref.delete();
              });
            res.status(200).send({Status:true,Message:"Data deleted"});

        }).catch(function(error) {
            res.send({ Status: false, Message: error });
        });
    } catch (error) {
        res.send({ Status: false, Message: error });
    }
}