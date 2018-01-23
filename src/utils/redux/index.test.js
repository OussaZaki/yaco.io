import { handleSimpleAction, selectFromState } from './index'

describe('utils | redux', () => {
  describe('handleSimpleAction', () => {
    it('should assign provided action payload to defined property of provided state', () => {
      const handler = handleSimpleAction('key')
      const stateBefore = {
        foo: 'bar'
      }
      const stateAfter = {
        foo: 'bar',
        key: []
      }
      expect(handler(stateBefore, {payload: []})).to.eql(stateAfter)
    })
    it('should assign default payload to defined property of provided state', () => {
      const handler = handleSimpleAction('key', 'default value')
      const stateBefore = {
        foo: 'bar'
      }
      const stateAfter = {
        foo: 'bar',
        key: 'default value'
      }
      expect(handler(stateBefore, {})).to.eql(stateAfter)
    })
    it('should assign provided action payload to defined property of provided instead of default payload', () => {
      const handler = handleSimpleAction('key', 'default value')
      const stateBefore = {
        foo: 'bar'
      }
      const stateAfter = {
        foo: 'bar',
        key: []
      }
      expect(handler(stateBefore, {payload: []})).to.eql(stateAfter)
    })
  })
  describe('selectFromState', () => {
    const state = {
      module1: {
        data1: 'a',
        dataObject: { data: 'b' }
      },
      module2: { withData: { withData: { withData: { data: 123 } } } }
    }
    it('uses the get method to fetch data from the state', () => {
      expect(selectFromState('module1.data1')(state)).to.eql('a')
      expect(selectFromState('module1.dataObject.data')(state)).to.eql('b')
      expect(selectFromState('module2.withData.withData.withData.data')(state)).to.eql(123)
    })
    it('should be able to handle non-existing keys', () => {
      expect(selectFromState('module1.data2')(state)).to.eql(undefined)
      expect(selectFromState('lorem.ipsum.jada.yoda')(state)).to.eql(undefined)
    })
    it('should be use default fallback value for non-existing keys', () => {
      expect(selectFromState('module1.data2', true)(state)).to.eql(true)
      expect(selectFromState('lorem.ipsum.jada.yoda', { data: 'a' })(state)).to.eql({ data: 'a' })
    })
  })
})
