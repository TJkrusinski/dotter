'use strict';

var fs = require('fs');
var path = require('path');
var getHomePath = require('home-path');

/**
 *  Write the config to the . file
 *
 *  @param {String} file - name of the file to write
 *  @param {String|Buffer} contents - file contents to write
 *  @return {Boolean}
 *  @api public
 */

exports.write = function(file, contents) {
  var rcPath = _getRcPath(file);
  var err = null;

  try {
    fs.writeFileSync(rcPath, contents);
  } catch(e) {
    err = e;
  };

  return err;
};

/**
 *  read the contents of the config file
 *
 *  @return {String} file
 *  @api public
 */

exports.read = function(file) {
  var rcPath = _getRcPath(file);
  var contents;

  try {
    contents = fs.readFileSync(rcPath);
  } catch (e) {
    contents = null;
  };

  return contents;
};

/**
 *  remove the dot file from disk
 *
 *  @param {String} file
 *  @return {Boolean}
 *  @api public
 */

exports.unlink = function(file) {
  var rcPath = _getRcPath(file);
  var err = null;

  try {
    fs.unlinkSync(rcPath);
  } catch(e) {
    err = e;
  };

  return err;
};

/**
 *  Get the . file path
 *
 *  @param {String} file
 *  @return {String}
 *  @api private
 */

function _getRcPath(file) {
  var home = getHomePath();
  return path.join(home, '.'+file);
};
