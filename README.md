wmcommons
---------

This module takes a file name of a Wikimedia Commons file and converts into the
URL of the file itself, as Mediawiki installations have an odd directory
structure.

## Usage

* ``commons(filename, ssl)``

The first argument is the file name used on Wikimedia projects. The second is a
boolean governing whether to return the HTTPS version of the image or not.

```javascript
var commons = require('wmcommons')
console.log(commons('Example.png'))
console.log(commons('Commons-logo-en.svg',true))
```
returns:

```
http://upload.wikimedia.org/wikipedia/commons/7/70/Example.png
https://upload.wikimedia.org/wikipedia/en/4/41/Commons-logo-en.svg
```


