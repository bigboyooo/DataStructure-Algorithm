var add = require('../base/add');
var expect = require('chai').expect;

describe('加法函数的测试', function(){
  it('1 加 1 应该等于 2', function(){
    expect(add(1, 1)).to.be.equal(2);
  })
  it('相等或不相等', function(){
    expect(4+5).to.be.equal(9);
  })
})