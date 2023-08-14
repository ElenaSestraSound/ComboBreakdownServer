import { Request, Response, NextFunction } from 'express';

const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    console.log("Middleware Error Handling");
    const errStatus: number = err.statusCode || 500;
    const errMsg: string = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null
    });
};

export { ErrorHandler };
