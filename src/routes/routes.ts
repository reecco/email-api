import { Request, Response, Router } from "express";

import Email from "../utils/Email";
import { token } from "../middlewares/";

const router = Router();

router.post("/v2/send/email", token, async (req: Request, res: Response) => {
  const { fromEmail, toEmail, name, text } = req.body;

  if (!fromEmail || !toEmail || !name || !text) 
    return res.status(400).json({ 
      message: "Invalid syntax.", 
      code: 400 
    });

  const send = await Email.send(req.body);
  
  if (!send)
    return res.status(500).json({ 
      message: "There was an error sending the email.", 
      code: 500 
    });

  if (send.responseCode == 535)
    return res.status(401).json({ 
      message: "Username and password not accepted.", 
      code: 401 
    });

  return res.status(201).json({ 
    message: "Email successfully sent.", 
    code: 201 
  });
});

export default router;