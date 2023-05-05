import { NextFunction, Request, Response, Express } from "express";
import cors from "cors";

export function access(app: Express) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    cors();
    next();
  });
}

export function token(req: Request, res: Response, next: NextFunction) {
  const tokenSys = String(process.env.TOKEN);
  const auth = req.headers["authorization"];
  const token = auth ? auth.split(" ")[1] : "";

  if (token != tokenSys)
    return res.status(401).json({ 
      message: "Invalid token.", 
      code: 401 
    });

  next();
}