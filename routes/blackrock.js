const router = require('express').Router();

router.get('/test', (req, res) => {
	const listings = [];
	for (let i = 0; i < 20; i++) {
		listings.push({
			ticker: `${i}`
		});
	}

	res.status(200).json(listings);
});

module.exports = router;