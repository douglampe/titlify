'use strict';

var assert = require('assert');
var titlify = require('../lib');

describe('titlify', function () {
  it('should parse various non-word characters', function () {
    assert.equal(titlify('this is a test'), 'This Is A Test');
    assert.equal(titlify('this-is-a-test'), 'This Is A Test');
    assert.equal(titlify('this\\is/a.test'), 'This Is A Test');
    assert.equal(titlify('this-is-a-TEST', true), 'This Is A Test');
    assert.equal(titlify('this-is-a-TEST', false), 'This Is A TEST');
  });
});
