const { firebase, admin } = require('../firebase');
const db = firebase.firestore();
const playerModel = require("../models/playerModel");

exports.getAll = async (req, res, next) => {
    let playerArray = [];
    db.collection('players')
        .get(snapshot => {
            if (snapshot.empty) {
                res.status(200).send({ Status: false, Message: "No data for players found" });
            } else {
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const player = new playerModel(data.name, data.team, data.role, data.format, data.battingAverage, data.bowlingAverage,
                        data.strikeRate, data.economy, data.matchesPlayed,
                        data.totalInings, data.totalRuns, data.totalWickets, data.highestScore, data.bowlingSR,data.price,data.points);
                    playerArray.push(team);
                })
                res.status(200).send({ Status: true, Message: playerArray });
            }
        })
};

exports.addPlayer = async (req, res, next) => {
    let player = req.body;

    db.collection('players')
        .where("name", "=", player.name)
        .where("team", "=", player.team)
        .get(snapshot => {
            if (snapshot.empty) {
                db.collection
                    .add({ ...req.body })
                    .then(docRef => {
                        res.status(200).send({ Status: true, Message: "Record succesfully saved " });
                    })
            } else {
                res.status(200).send({ Status: false, Message: "Player already exists in team" });
            }
        })
};  

exports.updatePlayer = async (req, res, next) => {
    var data = req.body;

    db.collection('players')
        .where("name", "=", data.name)
        .where("team", "=", data.team)
        .get(async snapshot => {
            if (snapshot.empty) {
                res.status(200).send({ Status: false, Message: `No data found to be updated against ${data.name}` })
            } else {
                const batch = db.batch();
                snapshot.forEach((doc) => {
                    batch.set(doc.ref, data); // Replace the entire document
                });

                // Commit the batch operation
                await batch.commit();

                res.status(200).json({ message: 'Documents updated successfully' });
            }
        })
};


exports.deleteSpecificPlayer = async (req, res, next) => {
    try {
        var data = req.body;
        db.collection('players')
            .where("name", "=", data.name)
            .where("team", "=", data.team)
            .get(async snapshot => {
                if (snapshot.empty) {
                    res.status(200).send({ Status: false, Message: `No player ${data.name} found in team ${data.team} to be deleted` });
                } else {
                    const batch = db.batch(); // Use a batch for efficiency
                    snapshot.forEach((doc) => {
                        batch.delete(doc.ref); // Add each document to the batch
                    });
                    await batch.commit();

                    res.status(200).send({ Status: true, Message: `Player ${data.name} deleted Successfully` });
                }
            })
    }
    catch (e) {
        res.status(200).send({ Status: true, Message: `Exception in deleting specific team player` });
    }
};

exports.deleteTeamPlayers = async (req, res, next) => {
    try {
        var data = req.body;

        db.collection('players')
            .where("team", "=", data.team)
            .get(async snapshot => {
                if (snapshot.empty) {
                    res.status(200).send({ Status: false, Message: `No players found in team ${data.team}` });
                } else {
                    const batch = db.batch(); // Use a batch for efficiency
                    snapshot.forEach((doc) => {
                        batch.delete(doc.ref); // Add each document to the batch
                    });
                    await batch.commit();

                    res.status(200).send({ Status: true, Message: `Team ${data.team} Players deleted Successfully` });
                }
            })

    } catch (e) {
        res.status(200).send({ Status: false, Message: "Exception in deleting entire team players" });
    }

}
exports.getSpecificPlayer   = async (req, res, next) => {
    var teamPlayer = [];
    var data = req.body;

    db.collection('players')
        .where("name", "=", data.name)
        .where("team", "=", data.team)
        .get(snapshot => {
            if (snapshot.empty) {
                res.status(200).send({ Status: false, Message: `No player ${data.name} found in team ${data.team}` });
            } else {
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const player = new playerModel(data.name, data.team, data.role, data.format, data.battingAverage, data.bowlingAverage,
                        data.strikeRate, data.economy, data.matchesPlayed,
                        data.totalInings, data.totalRuns, data.totalWickets, data.highestScore, data.bowlingSR);
                    teamPlayer.push(player);
                })

                res.status(200).send({ Status: true, Message: teamPlayer });
            }
        })
};

exports.getSpecificTeamPlayers = async (req, res, next) => {
    var teamPlayer = [];
    var data = req.body;

    db.collection('players')
        .where("team", "=", data.team)
        .get(snapshot => {
            if (snapshot.empty) {
                res.status(200).send({ Status: false, Message: `No player found in team ${data.team}` });
            } else {
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const player = new playerModel(data.name, data.team, data.role, data.format, data.battingAverage, data.bowlingAverage,
                        data.strikeRate, data.economy, data.matchesPlayed,
                        data.totalInings, data.totalRuns, data.totalWickets, data.highestScore, data.bowlingSR,data.price,data.points);
                    teamPlayer.push(player);
                })

                res.status(200).send({ Status: true, Message: teamPlayer });
            }
        })
};