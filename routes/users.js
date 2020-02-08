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
	return res.status(204).send();
});

router.route('/signup')
	.post(async (req, res) => {
		const { email, password, name, age, gender } = req.body;
		try {
			await auth.createUserWithEmailAndPassword(email, password);
			await db.collection('users').doc(auth.currentUser.uid).set({
				name, age, gender
			});
		} catch (err) {
			return res.status(500).json(err);
		}
		return res.status(204).send();
	});

router.route('/signin')
	.post(async (req, res) => {
		const { email, password } = req.body;
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			console.error(err);
			return res.status(500).send(err);
		}
		return res.status(204).send();
	});

module.exports = router;