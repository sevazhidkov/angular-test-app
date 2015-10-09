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
	var newMessage = {text: req.body.message, from: req.user.displayName};
	User.findOne({_id: req.body.id}, function(err, doc) {
    doc.messages.push(newMessage);
		doc.save();
  });
	return res.status(200).send('Message sent');
};
