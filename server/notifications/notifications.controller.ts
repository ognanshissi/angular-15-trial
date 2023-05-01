import {NextFunction, Request, Response} from "express";


export  const  createNotification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({message: "Hello World"})
  } catch (e) {
    return next(e);
  }
}

