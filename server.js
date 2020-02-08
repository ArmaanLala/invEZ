// Server
const express = require('express');
// Firebase
// const firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/firestore');
// .env
require('dotenv').config();

const app = new express();

// Routes
app.get('/api', (req, res) => {
	return res.json({
		msg: "owo"
	});
})
app.use('/api/user', require('./routes/user')); // user signup and signin

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