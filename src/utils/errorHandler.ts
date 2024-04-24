import { Response } from "express";

export const errorHandler = (err: Error, res: Response) => {
  return res.status(500).json({
    success: false,
    message: err.message,
  });
};
