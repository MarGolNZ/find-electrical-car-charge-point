import { getChargeInfo } from '../apiClient'
import nock from 'nock'

describe('getChargeInfo', () => {
    const testData = [{ latitude: '', longitude: '' }, { latitude: '', longitude: '' }]
    const scope = nock('http://localhost')
        .get('/api/v1/`/api/v1/charge-point/${position[0]}/${position[1]}`')
        .reply(200, testData)

    test('receiving geolocation data from API', () => {
        expect.assertions(2)
        return getChargeInfo()
            .then(newData => {
                expect(newData).toEqual(testData)
                expect(scope.isDone()).toBe(true)
                return null
            })
    })
})