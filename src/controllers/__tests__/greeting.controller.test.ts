import { MockController } from '../../types'
import { sayHi, sayGoodbye } from '../greeting.controller'

const sayHiMock = sayHi as MockController
const sayGoodbyeMock = sayGoodbye as MockController
const statusMock = jest.fn()
const jsonMock = jest.fn()

const getMockResponse = () => ({
  status: statusMock.mockImplementation(() => ({
    json: jsonMock,
  })),
})

test('SayHi: Should return status 200 and json response.', () => {
  const data = {
    message: 'Hi! Follow me on twitter @manupasc',
  }
  const responseMock = getMockResponse()

  sayHiMock(null, responseMock, () => null)

  expect(statusMock).toHaveBeenCalledWith(200)
  expect(jsonMock).toHaveBeenCalledWith(data)
})

test('SayGoodbye: Should return status 200 and json response.', () => {
  const data = {
    message: 'Bye! Thanks for passing by.',
  }
  const responseMock = getMockResponse()

  sayGoodbyeMock(null, responseMock, () => null)

  expect(statusMock).toHaveBeenCalledWith(200)
  expect(jsonMock).toHaveBeenCalledWith(data)
})
