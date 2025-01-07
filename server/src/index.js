const express = require('express');
const app = express();

const PORT = 3000;

// Import route files
const userRoute = require('./routes/user');
const teamRoute = require('./routes/team');
const playerRoute = require('./routes/players');
const favTeamRoute = require('./routes/favTeam');
const seriesRoute = require('./routes/series');
const leagueRoute = require('./routes/league')

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', userRoute); // Base path for user routes
app.use('/api', teamRoute); // Base path for team routes
app.use('/api', playerRoute);// Base path for player routes
app.use('/api', favTeamRoute);// Base path for fav team routes
app.use('/api', seriesRoute); //Base path for series routes
app.use('/api', leagueRoute); //Base path for series routes



// Catch-all error handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Node API SERVICE RUNNING ON PORT ${PORT}`);
});

module.exports = app;
