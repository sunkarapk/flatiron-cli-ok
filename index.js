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
  cliOk.options = options || {};

  if (!app.plugins.cli) {
    throw new Error('`cli` plugin is required to use `flatiron-cli-ok`');
  }

  var start = app.start;

  app.start = function (options, cb) {
    if (!cb && typeof options == 'function') {
      cb = options;
      options = null;
    }

    start(options || {}, function (err) {
      if (cb) return cb(err);
      if (err) {
        if (err.message && cliOk.options.show) {
          app.log.error(err.message.red.bold);
        }
        app.log.info(app.name.grey + ' ' + 'not'.red.bold + ' ' + 'ok'.red.bold);
      } else {
        app.log.info(app.name.grey + ' ' + 'ok'.green.bold);
      }
    });
  };

};

cliOk.init = function (done) {
  var app = this;

  app.log.info('Welcome to ' + app.name.grey);
  app.log.info('It worked if it ends with ' + app.name.grey + ' ' + 'ok'.green.bold);

  done();
};
