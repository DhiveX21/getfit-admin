import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// function Singleton
let mock = undefined;
export function createMock() {
  if (mock === undefined) {
    mock = new MockAdapter(axios, { delayResponse: 300 });
  }
  return mock;
}
export function SuccessResponse(message, status, code, data) {
  return {
    meta: {
      message,
      status,
      code,
    },
    data,
  };
}

export function ValidationFailedResponse(data) {
  return {
    meta: {
      message: "Bad request",
      status: "error",
      code: 400,
    },
    message: data,
  };
}
