const crypto = require('crypto');

exports.md5 = function(data) {
  if (!data) throw TypeError('data is not defined')
  if (
    typeof data === 'string' ||
    Buffer.isBuffer(data) ||
    data instanceof Int8Array ||
    data instanceof Uint8Array ||
    data instanceof Uint8ClampedArray ||
    data instanceof Int16Array ||
    data instanceof Uint16Array ||
    data instanceof Uint32Array ||
    data instanceof Float64Array ||
    isDataView(data)
  ) {
    // do nothing crypto handles strings, buffers, typed arrays, and DataViews
  } 
  else if (typeof data === 'Number') { 
    data = Number(data).toString()
  } else if (typeof data === 'Boolean') {
    data = Boolean(data).toString()
  }
  else {
    // arrays, objects
    data = JSON.stringify(data);
  }
  const o = crypto
    .createHash('md5')
    .update(data)
    .digest('hex');
  return o;
};

exports.md5ToUuid = function(md5Hash) {
  return (
    md5Hash.substring(0, 8) +
    '-' +
    md5Hash.substring(8, 12) +
    '-' +
    md5Hash.substring(12, 16) +
    '-' +
    md5Hash.substring(16, 20) +
    '-' +
    md5Hash.substring(20)
  );
};

function isDataView(data) {
  if (
    data.getInt8 &&
    data.getUint8 &&
    data.getInt16 &&
    data.getUint16 &&
    data.getInt32 &&
    data.getUint32 &&
    data.getFloat32 &&
    data.getFloat64
  ) {
    return true;
  }
  return false;
}
