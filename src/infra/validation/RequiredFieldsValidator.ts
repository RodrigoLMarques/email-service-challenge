/* eslint-disable @typescript-eslint/no-explicit-any */
import { Validator } from '@core/infra/Validator'
import { MissingParamError } from './errors/MissingParamError'

export class RequiredFieldsValidator<T = any> implements Validator<T> {
  constructor(private readonly fields: string[]) {}

  public validate(data: T): null {
    const missingFields: string[] = []
    for (const field of this.fields) {
      if (
        data[field] === null ||
        data[field] === undefined ||
        (typeof data[field] === 'string' && data[field].trim() === '')
      ) {
        missingFields.push(field)
      }
    }

    if (missingFields.length > 0) {
      throw new MissingParamError(missingFields.join(', '))
    }

    return null
  }
}
