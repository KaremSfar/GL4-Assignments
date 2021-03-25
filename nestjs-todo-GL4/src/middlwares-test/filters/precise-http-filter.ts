import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import {Request, Response} from 'express';

@Catch(HttpException)
export class PreciseHttpFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        response.
            status(exception.getStatus())
            .json({
                message: `le message d'erreur est ${exception.message}`,
                statusCode: exception.getStatus(),
                timestamp: new Date().toISOString(),
                path: request.url
            });

        return response;
    }
}
