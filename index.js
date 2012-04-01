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
  var app = this, logger;
  options = options || {};

  if (!app.plugins.cli) {
    throw new Error('`cli` plugin is required to use `flatiron-cli-ok`');
  }

  var start = app.start;
  // var init  = app.init;

  // app.init = function (options, cb) {
  //   init(options || {}, function (err) {
  //     app.log.info('Welcome to ' + app.name.grey);
  //     app.log.info('It worked if it ends with ' + app.name.grey + ' ok'.green.bold);
  //     cb(err);
  //   });
  // };

  app.start = function (options, cb) {
    if (!cb && typeof options == 'function') {
      cb = options;
      options = null;
    }

    start(options || {}, function (err) {
      if (cb) return cb(err);
      if (err) {
        app.log.info(app.name.grey + ' ' + 'not ok'.red.bold);
      } else {
        app.log.info(app.name.grey + ' ' + 'ok'.green.bold);
      }
    });
  };

};
