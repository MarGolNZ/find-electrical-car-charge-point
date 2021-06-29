import request from 'superagent'

export function getChargeInfo(position) {
    console.log('log api client', position)
    return request
        .get(`/api/v1/charge-point/${position[0]}/${position[1]}`)
        .then(res => res.body)
        .catch(e => console.log(e))
}