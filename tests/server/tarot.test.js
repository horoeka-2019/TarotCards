import nock from 'nock'
import request from 'supertest'

import server from '../../server/server'

test('GET /api/v1/', () => {
  const scope = nock('http://localhost:3000/api/v1')
    .get('/cards/random')
    .reply(200, {data: {children: {msg: 'internal api working'}}})

  return request(server)
    .get('/api/v1/cards/random')
    .expect(200)
    .then(res => {
      scope.done()
      expect(res.body.msg).toBe('internal api working')
    })
})

// test('GET /api/v1/', () => {
//   const scope = nock('http://localhost:3000/api/v1')
//     .get('/cards/random')
//     .reply(200, {data: {children: {msg: 'internal api working'}}})

//   return request(server)
//     .get('/api/v1/cards/random')
//     .expect(200)
//     .then(res => {
//       scope.done()
//       expect(res.body.msg).toBe('yay, bananas')
//     })
// })