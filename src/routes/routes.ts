import { Request, Response, Router } from 'express';

import Email from '../utils/Email';

const router = Router();

router.post('/v2/send/email', async (req: Request, res: Response) => {
  const tokenSys = process.env.TOKEN;

  const { fromEmail, toEmail, name, text, token } = req.body;

  if (token != tokenSys)
    return res.status(401).json({ message: 'Invalid token.', status: 401 });

  if (!fromEmail || !toEmail || !name || !text) 
    return res.status(400).json({ message: 'Invalid syntax.', status: 400 });

  const send = await Email.send(fromEmail, toEmail, name, text);

  if (send.response.split(' ')[0] != 250)
    return res.status(400).json({ message: 'There was an error sending the email.', status: 400 });

  return res.status(200).json({ message: 'Email successfully sent.', status: 200 });
});

export default router;