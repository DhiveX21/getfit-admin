import axios from "axios";
import { createMock } from "helpers/ResponseMockTemplate";
import mockExercise from "_mock/exerciseApi_mock";

let EXERCISE_URL = process.env.REACT_APP_EXERCISE_SERVICE_URL;

// env is null url can be redirect to url mock
if (EXERCISE_URL === undefined) {
  const mock = createMock();
  mockExercise(mock);
  EXERCISE_URL = "api";
}

export const exerciseAPI = {
  getDatatable: (params) => {
    return axios.post(`${EXERCISE_URL}/videos/datatable`, { ...params });
  },

  getAllCategory: () => {
    return axios.get(`${EXERCISE_URL}/video-categories`);
  },

  createCategory: (body) => {
    return axios.post(`${EXERCISE_URL}/video-categories`, { ...body });
  },

  create: (body) => {
    return axios.post(`${EXERCISE_URL}/videos`, { ...body });
  },

  update: (id, body) => {
    return axios.put(`${EXERCISE_URL}/videos/${id}`, { ...body });
  },

  getOneById: (videoId) => {
    return axios.get(`${EXERCISE_URL}/videos/${videoId}`);
  },

  delete: (videoId) => {
    return axios.delete(`${EXERCISE_URL}/videos/${videoId}`);
  },
};
