import { UseCaseError } from '@core/infra/errors/UseCaseError'

export class MissingParamError extends Error implements UseCaseError {
  public readonly status = 400
  constructor(param: string) {
    super(`The ${param} parameter is missing in request body.`)
    this.name = 'MissingParamError'
  }
}
