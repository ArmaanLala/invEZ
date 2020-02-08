const router = require('express').Router();
const { auth, db } = require('../server');

class Stock {
	constructor(name, ticker, category, ranking) {
		this.name = name;
		this.ticker = ticker;
		this.category = category;
		this.ranking = ranking;
	}
}

const STOCK_LISTING = [
	new Stock('Tesla', 'TSLA', 'Transportation', 20),
	new Stock('Nvidia Corporation', 'NVDA', 'Transportation', 19),
	new Stock('Advanced Micro Devices Inc.', 'AMD', 'Technology', 18),
	new Stock('Twitter, Inc.', 'TWTR', 'Technology', 17),
	new Stock('Amazon', 'AMZN', 'Entertainment', 16),
	new Stock('Netflix', 'NFLX', 'Entertainment', 15),
	new Stock('Google', 'GOOGL', 'Technology', 14),
	new Stock('3M', 'MMM', 'Finance', 13),
	new Stock('JPMorgan Chase & Co.', 'JPM', 'Finance', 12),
	new Stock('Simon Property Group, Inc.', 'SPG', 'Finance', 11),
	new Stock('NCR Corporation', 'NCR', 'Finance', 10),
	new Stock('Ford Motor Co.', 'F', 'Transportation', 9),
	new Stock('General Motors', 'GM', 'Transportation', 8),
	new Stock('Berkshire Hathaway Inc.', 'BRK-A', 'Finance', 7),
	new Stock('International Business Machines Corp.', 'IBM', 'Technology', 6),
	new Stock('Coca-Cola', 'KO', 'Entertainment', 5),
	new Stock('McDonald\'s Corporation', 'MCD', 'Entertainment', 4),
	new Stock('Lockheed Martin Corp.', 'LMT', 'Transportation', 3),
	new Stock('Apple', 'AAPL', 'Technology', 2),
	new Stock('Walt Disney Company', 'DIS', 'Entertainment', 1)
];

router.get('/curated', async (req, res) => {
	// Get interests and risk preference
	try {
		const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
		const { interests, radio: risk, occupation } = userDoc.data();

		// Filter out things the user is not interested in
		const filtered = STOCK_LISTING.filter((stock) => {
			// Return everything if no interests are specified
			if (!(interests.transport || interests.tech || interests.finance || interests.entert)) {
				return true;
			}
			// Return stock if it is listed as an interest
			if (interests.transport && stock.category === 'Transportation') {
				return true;
			} else if (interests.tech && stock.category === 'Technology') {
				return true;
			} else if (interests.finance && stock.category === 'Finance') {
				return true;
			} else if (interests.entert && stock.category === 'Entertainment') {
				return true;
			} else {
				return false;
			}
		});

		// Sort the filtered array based on risk preference
		const highRiskFirst = (s1, s2) => s1.ranking > s2.ranking ? -1 : 1;
		const lowRiskFirst = (s1, s2) => s1.ranking < s2.ranking ? -1 : 1;
		if (risk === 'risk') {
			// Highest ranking first
			filtered.sort(highRiskFirst);
		} else if (risk === 'safe') {
			// Lowest ranking first
			filtered.sort(lowRiskFirst);
		} else {
			// Determine order based on employment where
			// student, unemployed = safe
			// retired, employed = risk
			if (occupation === 'Student' || occupation === 'Unemployed') {
				filtered.sort(lowRiskFirst);
			} else if (occupation === 'Retired' || occupation === 'Employed') {
				filtered.sort(highRiskFirst);
			}
		}

		return res.status(200).json(filtered);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/:ticker/:months', async (req, res) => {
	const fetch = require('node-fetch');
	try {
		const resp = await fetch(`https://www.blackrock.com/tools/hackathon/performance?apiVersion=v1&identifiers=${req.params.ticker}`);
		const data = await resp.json();

		// Get the past number of specified months
		return res.status(200).json(data.resultMap.RETURNS[0].returnsMap);
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports = router;