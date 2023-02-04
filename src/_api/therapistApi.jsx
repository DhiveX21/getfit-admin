import axios from "axios";
import { createMock } from "helpers/ResponseMockTemplate";
import mockTherapist from "_mock/therapistApi_mock";

let THERAPIST_URL = process.env.REACT_APP_USER_SERVICE_URL

// env is null url can be redirect to url mock
if (THERAPIST_URL === undefined) {
  const mock = createMock();
  mockTherapist(mock);
  THERAPIST_URL = "api";
}


export const therapistAPI = {
  getAll: () => {
    return axios.get(`${THERAPIST_URL}/teams`);
  },
}
