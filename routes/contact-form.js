var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/*var smtpConfig = {
	service: "gmail",
	auth: {
		xoauth2: {
			user: "brianjbuccellato@gmail.com",
			clientId: "639155267070-kjlg63s8199135otfmikum2v541bmkmf.apps.googleusercontent.com",
			clientSecret: "CbCaqSdgUASxZAhs7MBECXe0",
			refreshToken:  "1/XvkfehZptQiqrV9sfQbjTZtRGTePdDRxU4ZqXavZnjU",
			accessToken: "ya29.Ci-KA9imr7OMYGAnRfMSDAmqja3xIwI0q9YOyUswN4TVLbl51HRPIB0v6XNlhDvfTA"
		}
	}
};*/

var transport = nodemailer.createTransport();

router.sendMail = function(req, res, next) {
	
	var data = req.body;
	transport.sendMail({
		from: data.email,
		to: 'brianjbuccellato@gmail.com',
		subject: 'Recording Inquiry from: ' + data.firstName + ' ' + data.lastName,
		text: data.msg
	});
	res.json(data);
};

module.exports = router;

