/*eslint-disable*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var dogYears = require('./dogyears.js');

window.dogYears = dogYears;
},{"./dogyears.js":2}],2:[function(require,module,exports){
"use strict";

function calculateDogYears(age, weight) {
	var focalLength = 413.1781;
	var startAge = 25.48807;
	var startIncOffset = -2.35626;
	var eqCorrection = 134.9106;
	var ageIncOff = 2.369763;
	var startAgeOffset = 585.2361;
	var cutOffYear = 3;
	var cutOffMonths = cutOffYear * 12;
	
	if (weight < 5) {
		weight = 5;
	}
	
	var originalDogAge = age; 
	var dogAge = originalDogAge;
	
	if ( originalDogAge < cutOffYear ) {
		dogAge = cutOffYear ;
	}
	
	var zb = ((weight + startAgeOffset) * (weight + startAgeOffset))/(eqCorrection * focalLength);
	var winc = zb + startIncOffset;
	
	var humanAge = (winc * (dogAge - ageIncOff)) + startAge;
	
	if ( originalDogAge < 3) {
		var humanAgeAt3 = humanAge;
		var underThreeFl = (humanAgeAt3 * humanAgeAt3)/(4 * cutOffMonths);
		var dogAgeInMonths = originalDogAge * 12;
		humanAge = Math.sqrt(4 * dogAgeInMonths * underThreeFl); 
	}
	return humanAge;
}

module.exports = calculateDogYears; 
},{}]},{},[1]);
