const crypto = require('crypto');

module.exports = function(data) {
  if (!data) throw TypeError('data is not defined');
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
  } else if (typeof data === 'number') {
    data = Number(data).toString();
  } else if (typeof data === 'boolean') {
    data = Boolean(data).toString();
  } else {
    // arrays, objects
    data = JSON.stringify(data);
  }
  const o = crypto
    .createHash('md5')
    .update(data)
    .digest('hex');
  return o;
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
