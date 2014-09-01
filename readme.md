# Blitzkrieg

Middleware to provide an authorized domain for blitz.io in Node.js.

```js
var blitz = require('blitzkrieg');
var express = require('express');

var app = express();

app.use(blitz('ab-c12abcd1-a1a12345-1a12ab12-12a12a12'));
```

## Use

```js
blitz(BLITZ_AUTH_KEY);
```

Blitzkrieg will send '42' from the key's route.

For more information check the [Blitz.io docs](https://www.blitz.io/docs/rushing/authorization).

## Test

```js
npm test
```
