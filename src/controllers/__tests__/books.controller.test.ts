import { MockController } from '../../types'
import { book } from '../books.controller'

const bookMock = book as MockController
const statusMock = jest.fn()
const jsonMock = jest.fn()

const getMockResponse = () => ({
  status: statusMock.mockImplementation(() => ({
    json: jsonMock,
  })),
})

test('Should return status 200 and json response with the correct id.', () => {
  const data = { bookId: 3 }
  const requestMock = { params: { id: 3 } }
  const responseMock = getMockResponse()

  bookMock(requestMock, responseMock, () => null)

  expect(statusMock).toHaveBeenCalledWith(200)
  expect(jsonMock).toHaveBeenCalledWith(data)
})
