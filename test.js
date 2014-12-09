'use strict';

var assert = require('assert');
var fs = require('fs');
var dot = require('./');

describe('dot#write()', function(){
  it('writes a file to the home dir with a string', function(){
    assert.equal(dot.write('foo', 'foo bar'), null);
  });
});

describe('dot#read()', function(){
  it('reads a file to the home dir as a string', function(){
    assert.equal(dot.read('foo').toString(), 'foo bar');
  });
});

describe('dot#unlink()', function(){
  it('removes the dot file from disk', function(){
    assert.equal(dot.unlink('foo'), null);
  });
});

describe('dot#write()', function(){
  it('writes a file to the home dir with a buffer', function(){
    assert.equal(dot.write('biz', new Buffer('foo bar')), null);
  });
});

describe('dot#read()', function(){
  it('reads a file to the home dir as a buffer', function(){
    assert.equal(dot.read('biz'), new Buffer('foo bar'));
  });
});

describe('dot#unlink()', function(){
  it('removes the dot file from disk', function(){
    assert.equal(dot.unlink('biz'), null);
  });
});
