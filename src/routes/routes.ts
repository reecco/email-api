import { Request, Response, Router } from 'express';

import Email from '../utils/Email';
import token from '../middlewares/token';

const router = Router();

router.post('/v2/send/email', token, async (req: Request, res: Response) => {
  const { fromEmail, toEmail, name, text } = req.body;

  if (!fromEmail || !toEmail || !name || !text) 
    return res.status(400).json({ 
      message: 'Invalid syntax.', 
      code: 400 
    });

  const send = await Email.send(req.body);

  if (send.response.split(' ')[0] != 250)
    return res.status(400).json({ 
      message: 'There was an error sending the email.', 
      code: 400 
    });

  return res.status(200).json({ 
    message: 'Email successfully sent.', 
    code: 200 
  });
});

export default router;