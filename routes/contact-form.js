var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

var transport = nodemailer.createTransport();

router.sendMail = function(req, res, next) {
	
	var data = req.body;
	transport.sendMail({
		from: data.email,
		to: 'brianjbuccellato@gmail.com, volumeivrecording@gmail.com',
		subject: 'Recording Inquiry from: ' + data.firstName + ' ' + data.lastName,
		text: data.msgd
	});
	res.json(data);
};

module.exports = router;

