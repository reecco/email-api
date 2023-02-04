import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const tokenSys = String(process.env.TOKEN);
  const auth = req.headers['authorization'];
  const token = auth ? auth.split(' ')[1] : '';

  if (token != tokenSys)
    return res.status(401).json({ 
      message: 'Invalid token.', 
      code: 401 
    });

  next();
}