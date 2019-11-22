import request from 'superagent'

function api () {
  return request
    .get('http://rws-cards-api.herokuapp.com/api/v1/')
}

export default api