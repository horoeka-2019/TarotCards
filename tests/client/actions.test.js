import nock from 'nock'

import * as actions from '../../client/redux/actions'

test('fetchReading', () => {
  const scope = nock('http://localhost')
    .get('/api/v1/cards/random')
    .reply(200, [{data: ''}])

  const dispatch = jest.fn()

  return actions.fetchReading('')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0].type).toBe('REQUEST_READING')
      scope.done()
    })
})
