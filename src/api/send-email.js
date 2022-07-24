import { PrivyClient } from '@privy-io/privy-node'
import {
  PRIVY_API_KEY,
  PRIVY_API_SECRET,
} from '../../config/index'

import { errorMiddleware, checkAuth } from '../../helpers/api_middleware'

async function handler(
  req,
  res,
) {
  checkAuth(req);
  const privy = new PrivyClient(PRIVY_API_KEY, PRIVY_API_SECRET)
  const body = req.body;

  if (process.env.SEND_ENABLED) {
    await privy.sendEmail(
      body.userId,
      `Titulo`,
      ' <p>HTML or plaintext content to send</p>',
    )
  }
  res.status(200).json({ sent: true })
}

export default errorMiddleware(handler)