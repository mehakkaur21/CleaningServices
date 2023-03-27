const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Welcome to Home Page')
    res.render('index', {
        pageTitle: 'Cleaning Services',
    })
})



router.get('/dashboard', (req, res, next) => {
    res.render('dashboard', {
        pageTitle: 'Book Service',
    })
})

router.get('/manageServices', (req, res, next) => {
    res.render('dashboardIncludes/manageServices', {
        pageTitle: 'Manage Services',
    })
})

exports.router = router;