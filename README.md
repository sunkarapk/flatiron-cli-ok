[![build status](https://secure.travis-ci.org/pksunkara/flatiron-cli-ok.png)](http://travis-ci.org/pksunkara/flatiron-cli-ok)
# flatiron-cli-ok
Encapsulated logic for showing command status in flatiron CLI apps

## Installation
```
npm install flatiron-cli-ok
```

## Usage
At its core `flatiron-cli-ok` is a broadway-compatible plugin which can be used by any [flatiron](https://flatironjs.org) cli application

```js
var flatiron = require('flatiron')
  , app = flatiron.app;

app.name = 'app.js';

app.use(flatiron.plugins.cli, {
  usage: 'A simple CLI app using flatiron-cli-ok'
});

app.use(require('flatiron-cli-ok'));

app.start();
```

If you run the above script

```
➤ node app.js
```

The output will start with

```
info:   Welcome to app.js
info:   It worked if it ends with app.js ok
```

The output will end with

* If the command executed successfully

```
info:   app.js ok
```

* If the command executed unsuccessfully

```
info:   app.js not ok
```

### Show the error

You can give the `show` option to the plugin if you want to print the `err.message` passed to the callback

```js
app.use('flatiron-cli-ok', { show: true });
```

So in case of error, the output will end with

```
error:  Bad credentials
info:   app.js not ok
```

### IMPORTANT

__You have to call the callback in the command, if you want this plugin to show the status__

If you like this project, please watch this and [follow](http://github.com/users/follow?target=pksunkara) me.

## Testing
```
npm test
```

## Contributors
Here is a list of [Contributors](http://github.com/pksunkara/flatiron-cli-ok/contributors)

### TODO

__I accept pull requests and guarantee a reply back within a day__

## License
MIT/X11

## Bug Reports
Report [here](http://github.com/pksunkara/flatiron-cli-ok/issues). __Guaranteed reply within a day__.

## Contact
Pavan Kumar Sunkara (pavan.sss1991@gmail.com)

Follow me on [github](http://github.com/pksunkara), [twitter](http://twitter.com/pksunkara)
