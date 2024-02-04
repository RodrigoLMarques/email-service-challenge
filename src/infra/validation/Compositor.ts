/* eslint-disable @typescript-eslint/no-explicit-any */
import { Validator } from '@core/infra/Validator'

export class ValidatorCompositor<T = any> implements Validator<T> {
  constructor(private readonly validators: Validator<T>[]) {}

  validate(input: T): null {
    for (const validator of this.validators) {
      validator.validate(input)
    }

    return null
  }
}
