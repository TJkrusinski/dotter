'use strict';

var fs = require('fs');
var path = require('path');
var getHomePath = require('home-path');

/**
 *  Write the config to the . file
 *
 *  @param {String} path - path to this repo on their disk
 *  @return {Boolean} err
 *  @api public
 */

exports.write = function(path) {
  var rcPath = _getRcPath();
  var err = null;

  try {
    fs.writeFileSync(rcPath, path+'\n');
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
  var file = fs.readFileSync(rcPath).toString();

  return path.join(getHomePath(), file).replace(/\n/g, '');
};

/**
 *  Get the . file path
 *
 *  @return {String} path
 *  @api private
 */

function _getRcPath() {
  var home = getHomePath(file);
  return path.join(home, '.'+file);
};
