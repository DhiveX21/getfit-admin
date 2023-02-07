import { configAPIFacade } from "helpers/UtilHelpers";
import mockExercise from "_mock/exerciseApi_mock";

const [ axiosInstance, EXERCISE_URL ] = configAPIFacade(process.env.REACT_APP_EXERCISE_SERVICE_URL, mockExercise);

export const exerciseAPI = {
  getDatatable: (params) => {
    return axiosInstance.post(`${EXERCISE_URL}/videos/datatable`, { ...params });
  },

  getAllCategory: () => {
    return axiosInstance.get(`${EXERCISE_URL}/video-categories`);
  },

  createCategory: (body) => {
    return axiosInstance.post(`${EXERCISE_URL}/video-categories`, { ...body });
  },

  create: (body) => {
    return axiosInstance.post(`${EXERCISE_URL}/videos`, { ...body });
  },

  update: (id, body) => {
    return axiosInstance.put(`${EXERCISE_URL}/videos/${id}`, { ...body });
  },

  getOneById: (videoId) => {
    return axiosInstance.get(`${EXERCISE_URL}/videos/${videoId}`);
  },

  delete: (videoId) => {
    return axiosInstance.delete(`${EXERCISE_URL}/videos/${videoId}`);
  },
};
