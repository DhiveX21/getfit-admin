import { configAPIFacade } from "helpers/UtilHelpers";
import mockTherapist from "_mock/therapistApi_mock";

const [ axiosInstance, THERAPIST_URL ] = configAPIFacade(process.env.REACT_APP_USER_SERVICE_URL, mockTherapist);


export const therapistAPI = {
  getAll: () => {
    return axiosInstance.get(`${THERAPIST_URL}/teams`);
  },

  getAllEvaluationByUserId: (userId) => {
    return axiosInstance.get(`${THERAPIST_URL}/evaluations/${userId}`);
  },

  getDatatable: (params) => {
    return axiosInstance.post(`${THERAPIST_URL}/teams/datatable`, { ...params });
  },

  create: (body) => {
    return axiosInstance.post(`${THERAPIST_URL}/teams`, { ...body });
  },

  update: (id, body) => {
    return axiosInstance.put(`${THERAPIST_URL}/teams/${id}`, { ...body });
  },

  createUser: (body) => {
    return axiosInstance.post(`${THERAPIST_URL}/users`, { ...body });
  },

  deleteOne: (id) => {
    return axiosInstance.delete(`${THERAPIST_URL}/teams/${id}`);
  },

  getOneById: (id) => {
    return axiosInstance.get(`${THERAPIST_URL}/teams/${id}`);
  },
};
