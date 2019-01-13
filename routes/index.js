const express = require('express');

const router = express.Router();
const storeController = require('../controllers/storeController');

// router.get('/', (req, res) => {
// const jared = { name: 'jared', age: '40', cool: true };
// * res.json(jared);
// can be used to query data from url
// ex. url = localhost:7777/?name=jared&age=40
// * res.send(req.query.name);
// or
// * res.json(req.query);
// ! above requires milddleware -> see app.js line ~25

//   res.render('hello', jared);
// });

// * router with a variable
// router.get('/reverse/:name', (req, res) => {
//   const reverse = [...req.params.name].reverse().join('');
//   res.send(reverse);
// });

router.get('/', storeController.homePage);
router.get('/add', storeController.store);

module.exports = router;
