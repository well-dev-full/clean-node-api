import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    const requeriFields = ['name', 'email']
    for (const field of requeriFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return {
      statusCode: 0,
      body: null
    }
  }
}
