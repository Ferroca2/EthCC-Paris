import { FAKE_ACCESS_TOKEN } from '../config'

class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UnauthorizedError'
  }
}

export const checkAuth = (req) => {
  console.log(
    `[${req.method} ${req.url}]`,
    'Token match:',
    req.headers.access_token === FAKE_ACCESS_TOKEN
  )
  if (req.headers.access_token !== FAKE_ACCESS_TOKEN) {
    throw new UnauthorizedError('Request requires a valid access token')
  }
  return true
}

export const errorHandler = (err, res) => {
  if (err.name === 'UnauthorizedError') {
    console.error(err)
    return res.status(401).json({ message: err.message })
  }

  console.error(err)
  return res.status(500).json({ message: err.message })
}

export const errorMiddleware = (
  handler
) => {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (err) {
      errorHandler(err, res)
    }
  }
}
