// Server
const express = require('express');
const bodyParser = require('body-parser');
// Firebase
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
// .env
require('dotenv').config();

// Init Firebase
firebase.initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_ID,
	messagingSenderId: process.env.MESSAGE_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEAUSUREMENT_ID
});
const auth = firebase.auth();
const db = firebase.firestore();

// For use in other files
module.exports = {
	auth, db
};

// Init server
const app = new express();

// Allow access to req.body for JSON
app.use(bodyParser.json());

// Routes
app.use('/api/users', require('./routes/users')); // everything with users
app.use('/api/blackrock', require('./routes/blackrock')) // pulling stock data

// Static asset handling
if (process.env.NODE_ENV === 'production') {
	// Static folder
	app.use(express.static(__dirname + '/public'));
	// SPA Handling
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Listening on ${PORT}.`));