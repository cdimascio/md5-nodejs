# md5-node

![](https://travis-ci.com/cdimascio/md5-node.svg?branch=master)
![](https://img.shields.io/badge/license-MIT-blue.svg)

A node module that hashes data to MD5. It can also convert MD5 hashes to UUIDs

<p align="center">
<img src="https://raw.githubusercontent.com/cdimascio/md5-node/master/assets/md5-node.png" width="300px">
</p>

## Install

```shell
npm install md5-node
```

## Usage

```javascript
const { md5, md5ToUuid } = require('md5-node');
const hash = md5('data to hash');
const uuid = md5ToUuid(hash)
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

## Convert to MD5 to UUID

```javascript
const { md5ToUuid } = require('md5-node');
const uuid = md5ToUuid(md5Hash)
```

## License
[MIT](LICENSE)
