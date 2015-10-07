'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('../errors.server.controller'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	User = mongoose.model('User');

/**
 * View all users
 */
exports.all = function(req, res) {
  User.find({}, {displayName: 1}, function(err, docs) {
    return res.status(200).send(docs);
  });
};

exports.sendMessage = function(req, res) {
	var newMessage = {text: req.body.message[0], from: req.user.displayName};
	console.log(newMessage);
	var user = req.user;
	user.messages.push(newMessage);
	console.log(user);
	user.save(function(err) {
		console.log(err);
	});
	return res.status(200).send('ok');
};
