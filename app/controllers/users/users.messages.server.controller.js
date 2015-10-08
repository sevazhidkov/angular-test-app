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
  User.find({_id: {$ne: req.user._id}}, {displayName: 1}, function(err, docs) {
    return res.status(200).send(docs);
  });
};

exports.sendMessage = function(req, res) {
	var newMessage = {text: req.body.message[0], from: req.user.displayName};
	var user = req.user;
	user.messages.push(newMessage);
	user.save(function(err) {
		return res.status(400).send('Проблемы при отправке сообщения.');
	});
	return res.status(200).send('Сообщение добавлено.');
};
