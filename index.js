/*
 * index.js: Top-level include for flatiron-cli-ok
 *
 * (C) 2012, Pavan Kumar Sunkara
 *
 */

var path = require('path');

var cliOk = exports = module.exports;

cliOk.name = 'cli-ok';

cliOk.attach = function (options) {
  var app = this;
  options = options || {};

  if (!app.plugins.cli) {
    throw new Error('`cli` plugin is required to use `flatiron-cli-ok`');
  }
};
