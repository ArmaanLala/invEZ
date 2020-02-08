const router = require('express').Router();
const { auth, db } = require('../server');

router.get('/isauthenticated', (req, res) => {
	return res.status(200).json({
		// auth.currentUser is null when no one is logged in
		// null is falsy in JS
		isSignedIn: !!auth.currentUser
	});
});

router.post('/signout', (req, res) => {
	auth.signOut();
	return res.sendStatus(204);
});

router.post('/signup', async (req, res) => {
	const { email, password, name, age, gender } = req.body;
	try {
		await auth.createUserWithEmailAndPassword(email, password);
		await db.collection('users').doc(auth.currentUser.uid).set({
			name, age, gender
		});
	} catch (err) {
		return res.status(500).json(err);
	}
	return res.sendStatus(204);
});

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;
	try {
		await auth.signInWithEmailAndPassword(email, password);
	} catch (err) {
		console.error(err);
		return res.status(500).send(err);
	}
	return res.sendStatus(204);
});

router.patch('/update', async (req, res) => {
	const { occupation, interests, radio } = req.body;
	try {
		await db.collection('users').doc(auth.currentUser.uid).set({
			occupation, interests, radio
		}, { merge: true });
	} catch (err) {
		res.status(500).json(err);
	}
	res.sendStatus(204);
});

module.exports = router;