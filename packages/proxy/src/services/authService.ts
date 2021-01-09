import {Request, Response} from 'express';

import {config} from '../config';

export const authService = new class AuthService {

  constructor() {
  }

  public auth() {
    return (req:Request, res: Response, next: (err?: any) => any) => {
      next();
    };
  }

};
