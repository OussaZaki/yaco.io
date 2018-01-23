import get from './index'

describe('utils | get', () => {
  it('should return the non-falsy value at path of object', () => {
    // given
    const obj = {
      foo: {
        bar: {
          baz: 'qux'
        }
      }
    }
    // then
    expect(
      get('foo.bar.baz', obj)
    ).to.eql('qux')
  })
  it('should return the falsy value at path of object', () => {
    // given
    const obj = {
      foo: {
        foo: 0
      }
    }
    // then
    expect(
      get('foo.foo', obj)
    ).to.eql(0)
  })
  it('should return default value if value at the path of object is `null`', () => {
    // given
    const obj = {
      foo: {
        bar: {
          baz: null
        }
      }
    }
    const defaultValue = 'foo'
    // then
    expect(
      get('foo.bar.baz', obj, defaultValue)
    ).to.eql(defaultValue)
  })
  it('should return default value if value at the path of object is `undefined`', () => {
    // given
    const obj = {
      foo: {
        bar: {}
      }
    }
    const defaultValue = 'foo'
    // then
    expect(
      get('foo.bar.baz', obj, defaultValue)
    ).to.eql(defaultValue)
  })
  it('should return default value if object is `null`', () => {
    // given
    const obj = null
    // when
    const defaultValue = 'foo'
    // then
    expect(get('foo.bar', obj, defaultValue)).to.eql('foo')
  })
})
