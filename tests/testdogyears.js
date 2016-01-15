'use strict';
var calculateDogYears = require('../lib/dogyears.js');
//var mocha = require('mocha');
var expect = require('chai').expect;

describe('Test DogYears module', function () {
    it('Test result of a dog that 12 in actual years and weighs 12 pounds.', function () {
        var result = calculateDogYears(12, 10);
        expect(64.00810235249003).to.equal(result);
    });
});
