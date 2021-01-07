import { MockController } from '../../types'
import { hello } from '../greeting.controller'

const helloMock = hello as MockController
const statusMock = jest.fn()
const jsonMock = jest.fn()

const getMockResponse = () => ({
  status: statusMock.mockImplementation(() => ({
    json: jsonMock,
  })),
})

test('SayHi: Should return status 200 and json response.', () => {
  const data = {
    message: 'Hello from greeting resource!',
  }
  const responseMock = getMockResponse()

  helloMock(null, responseMock, () => null)

  expect(statusMock).toHaveBeenCalledWith(200)
  expect(jsonMock).toHaveBeenCalledWith(data)
})
