import express, { Express, Request, Response, json } from 'express';

import router from './routes';

export default (app: Express) => {
  app.route('/').get((req: Request, res: Response) => {
    return res.status(200).json({ 
      message: 'E-mail API', 
      code: 200 
    });
  });

  app.use(
    '/api',
    json(),
    router
  );
}