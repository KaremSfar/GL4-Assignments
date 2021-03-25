import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

//TODO : Base QueryFailedErrorFilter and inheritance for catching different errors
@Catch(QueryFailedError)
export class UniqueExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost): any {
    const { error, status } = this.getExceptionError(exception);

    const response = host.switchToHttp().getResponse<Response>();
    response.status(status).json({
      statusCode: status,
      message: error,
    });
  }

  getExceptionError(exception: any): { error: string; status } {
    const error =
      exception.errno == 1062
        ? 'duplicate entry for unique field'
        : 'internal server error';
    const status = 1062
      ? HttpStatus.CONFLICT
      : HttpStatus.INTERNAL_SERVER_ERROR;
    return { error: error, status: status };
  }
}
