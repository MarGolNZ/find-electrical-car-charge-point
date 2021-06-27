import request from 'superagent'

export function getChargeInfo() {
    return request
        .get('/api/v1/charge-point')
        .then(res => res.body)
        .catch(e => console.log(e))
}