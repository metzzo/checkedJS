var path = require('path');
var expect = require('chai').expect;

var checkedjs = require(path.join(__dirname, '..', './checkedjs.js'));

describe('checkedjs()', function () {
  'use strict';

  it('exists', function () {
    expect(checkedjs).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
