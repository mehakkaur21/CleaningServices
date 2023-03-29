const express = require("express");
const router = express.Router();
const isAuth = require('../middelwear/isAuth');
const bookingController = require('../controller/booking');
const { check, body } = require('express-validator/check');

router.get('/dashboard', isAuth, (req, res, next) => {
    res.render('dashboard', {
        pageTitle: 'Book Service',
        path:'/dashboard',
        message: null,
        contactNumber:'',
        address:'',
        pinCode:'',
        locationType:'',
        bookingDate:'',
        startingTime:'',
        desiredService:'',
        dateOfBooking:'',
        timeOfBooking:'',
        details:'',
    })
})

router.post('/booking', [
    body('firstName').custom((value) => {
        if (value === '') {
            throw new Error(`Please enter your first name`);
        }
        return true;
    }),
    body('lastName').custom((value) => {
        if (value === '') {
            throw new Error(`Please enter your last name`);
        }
        return true;
    }),
    body('email').isEmail().withMessage('Please Enter A Valid Email'),
    body('contactNumber').custom((value) => {
        if (value === '') {
            throw new Error(`Please enter your contact number`);
        }
        return true;
    }),
    body('pinCode').custom((value) => {
        if (value === '') {
            throw new Error(`Please enter your Pin Code`);
        }
        return true;
    }),
    body('locationType').custom((value) => {
        if (value === '') {
            throw new Error(`Please enter Location Type`);
        }
        return true;
    }),
    body('bookingDate').custom((value) => {
        if (value === '') {
            throw new Error(`Please enter your Booking Date`);
        }
        return true;
    }),
    body('startingTime').custom((value) => {
        if (value === '') {
            throw new Error(`Please choose the starting time`);
        }
        return true;
    }),
    body('desiredServices').custom((value) => {
        if (value === '') {
            throw new Error(`Please choose your desired service`);
        }
        return true;
    }),
    body('details').custom((value) => {
        if (value === '') {
            throw new Error(`Please enter details and requirements`);
        }
        return true;
    }),
    body('address').custom((value) => {
        if (value === '') {
            throw new Error(`Please enter your address`);
        }
        return true;
    }),

], bookingController.postBooking);
router.get('/manageServices', isAuth, bookingController.getBookings);

exports.router = router;
