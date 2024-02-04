/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseCaseError } from './errors/UseCaseError'

export type HttpResponse = {
  statusCode: number
  body: any
}

export function ok<T>(dto?: T): HttpResponse {
  return {
    statusCode: 200,
    body: dto,
  }
}

export function created(): HttpResponse {
  return {
    statusCode: 201,
    body: undefined,
  }
}

export function clientError(error: Error): HttpResponse {
  return {
    statusCode: 400,
    body: {
      error: {
        name: 'ClientError',
        message: error.message,
      },
    },
  }
}

export function unauthorized(error: Error): HttpResponse {
  return {
    statusCode: 401,
    body: {
      error: {
        name: 'Unauthorized',
        message: error.message,
      },
    },
  }
}

export function forbidden(error: Error): HttpResponse {
  return {
    statusCode: 403,
    body: {
      error: {
        name: 'Forbidden',
        message: error.message,
      },
    },
  }
}

export function notFound(error: Error): HttpResponse {
  return {
    statusCode: 404,
    body: {
      error: {
        name: 'NotFound',
        message: error.message,
      },
    },
  }
}

export function conflict(error: Error): HttpResponse {
  return {
    statusCode: 409,
    body: {
      error: {
        name: 'Conflict',
        message: error.message,
      },
    },
  }
}

export function tooMany(error: Error): HttpResponse {
  return {
    statusCode: 429,
    body: {
      error: {
        name: 'TooMany',
        message: error.message,
      },
    },
  }
}

export function fail(error: Error) {
  console.log(error)

  return {
    statusCode: 500,
    body: {
      error: {
        name: 'Fail',
        message: error.message,
      },
    },
  }
}

export function adapt(error: UseCaseError) {
  return {
    statusCode: error.status,
    body: {
      error: {
        name: error.name,
        message: error.message,
      },
    },
  }
}
