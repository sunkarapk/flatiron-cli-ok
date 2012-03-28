# flatiron-cli-ok
Encapsulated logic for showing ok in flatiron CLI apps

## Installation
```
npm install flatiron-cli-ok
```

## Usage
At its core `flatiron-cli-ok` is a broadway-compatible plugin which can be used by any [flatiron](https://flatironjs.org) application

```js
var flatiron = require('flatiron')
  , app = flatiron.app;

//
// Configure the Application to be a CLI app with
// a JSON configuration file `test-config.json`
//
app.name = 'app.js';

app.use(flatiron.plugins.cli, {
  usage: 'A simple CLI app using flatiron-cli-ok'
});

app.use(require('flatiron-cli-ok'));

if (!module.parent) {
  app.start();
}
```

If you run the above script

```bash
$ node app.js
```

The output will be

```bash
```

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
