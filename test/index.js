const expect = require('chai').expect;
const md5 = require('../lib/index');

describe('md5', function() {
  it('should create an md5 hash given an object', function() {
    const data = {
      name: 'carmine',
    };
    const hash = md5(data);
    expect(hash).to.equal('889646a86fdaec8c619e446bdf18553a');
  });

  it('should create an md5 hash given array', function() {
    const data = ['carmine'];
    const hash = md5(data);
    expect(hash).to.equal('096e22a567f99351e150738524ba531d');
  });

  it('should create an md5 hash given a string', function() {
    const data = 'carmine';
    const hash = md5(data);
    expect(hash).to.equal('5fbf97ee13dd4830ec63266b82d9e981');
  });

  it('should create an md5 hash given a boolean', function() {
    const data = true;
    const hash = md5(data);
    expect(hash).to.equal('b326b5062b2f0e69046810717534cb09');
  });

  it('should create an md5 hash given a number', function() {
    const data = 10.24435;
    const hash = md5(data);
    expect(hash).to.equal('27c4d76eea9ebaf56a18dae900eda476');
  });

  it('should create an md5 hash given undefined', function() {
    const bad = () => md5();
    expect(bad).to.throw(TypeError);
  });

  it('should create an md5 hash given a buffer', function() {
    const data = Buffer.from('carmine');
    const hash = md5(data);

    expect(hash).to.equal('5fbf97ee13dd4830ec63266b82d9e981');
  });

  it('should create an md5 hash given a Int16Array', function() {
    var int16 = new Int16Array(2);
    int16[0] = 42;
    const hash = md5(int16);

    expect(hash).to.equal('9824a7030ce67cf3f0efe7529f0c6ecc');
  });

  it('should create an md5 hash given function', function() {
    const f = function() {
      return 'carmine';
    };
    const bad = () => md5(f);
    expect(bad).to.throw(TypeError);
  });

  it('should create an md5 hash given DataView', function() {
    const buffer = new ArrayBuffer(16);
    const view1 = new DataView(buffer);
    view1.setInt8(12, 42); // put 42 in slot 12
    const hash = md5(view1);

    expect(hash).to.equal('54de58cbc6ba6add305aa93599d0e48f');
  });
});
