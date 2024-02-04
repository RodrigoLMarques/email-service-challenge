/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Validator<T = any> {
  validate(data: T): Error | null
}
