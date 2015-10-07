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
  console.log('Im here');
  var result;
  User.find({}, {displayName: 1}, function(err, docs) {
    return res.status(200).send(docs);
  });
};