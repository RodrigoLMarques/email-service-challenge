/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponse } from './HttpResponse'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
