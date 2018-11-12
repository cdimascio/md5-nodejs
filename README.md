# md5-nodejs

![](https://travis-ci.org/cdimascio/md5-nodejs.svg?branch=master)
![](https://img.shields.io/badge/license-MIT-blue.svg)

A node module that hashes data to MD5

<p align="center">
<img src="https://raw.githubusercontent.com/cdimascio/md5-node/master/assets/md5-nodejs.png" width="350px">
</p>

## Install

```shell
npm install md5-nodejs
```

## Usage

```javascript
const md5 = require('md5-nodejs');
const hash = md5('data to hash');
```

### Hash Anything!
Here are some examples

#### Hash strings
```javascript
const hash = md5('string to hash');
```
#### Hash buffers
```javascript
const hash = md5(Buffer.from('carmine'));
```
#### Hash TypedArrays
```javascript
const int16Array = new Int16Array(2);
int16Array[0] = 42;
const hash = md5(int16Array);
```

#### Hash objects
```javascript
const hash = md5({
    name: 'carmine'
});
```

#### Hash arrays
```javascript
const hash = md5(['hash', 'this', 'array']);
```

#### Hash primitives
```javascript
const hash = md5(3.14159265359);
const hash = md5(true);
```


## License
[MIT](LICENSE)
