'use strict';
var calculateDogYears = require('../lib/dogyears.js');
//var mocha = require('mocha');
var expect = require('chai').expect;

describe('Test DogYears module', function () {
    it('Test result of a dog that 12 in actual years and weighs 12 pounds.', function () {
        var result = calculateDogYears(12, 10);
        expect(64.00810235249003).to.equal(result);
    });

    it('Test below min weight', function () {
        var result = calculateDogYears(12, 2);
        expect(62.98406691594498).to.equal(result);
    });

    it('Test below min age', function () {
        var result = calculateDogYears(2, 20);
        expect(22.980040765920045).to.equal(result);
    });
});
