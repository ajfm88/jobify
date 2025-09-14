import { StatusCodes } from "http-status-codes";
// This code defines a custom error class NotFoundError that extends the built-in Error class in JavaScript.
// The NotFoundError class is designed to be used when a requested resource is not found, and it includes a
// status code of 404 to indicate this.

// class NotFoundError extends Error: This line defines a new class NotFoundError that extends the built-in Error class.
// This means that NotFoundError inherits all of the properties and methods of the Error class, and can also define its own properties and methods.
export class NotFoundError extends Error {
  // This is the constructor method for the NotFoundError class, which is called when a new instance
  // of the class is created. The message parameter is the error message that will be displayed when the error is thrown.
  constructor(message) {
    // This line calls the constructor of the Error class and passes the message parameter to it. This sets the error message for the NotFoundError instance.
    super(message);
    // This line sets the name property of the NotFoundError instance to "NotFoundError". This is a built-in property of the Error class that
    // specifies the name of the error.
    this.name = "NotFoundError";

    // This line sets the statusCode property of the NotFoundError instance to 404.
    // This is a custom property that is specific to the NotFoundError class and indicates the HTTP status code that should be returned when this error occurs.
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
// By creating a custom error class like NotFoundError, you can provide more specific error messages and properties
// to help with debugging and error handling in your application.

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthenticatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
