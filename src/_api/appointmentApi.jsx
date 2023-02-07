import { configAPIFacade } from "helpers/UtilHelpers";
import mockApointment from "_mock/appointmentApi_mock";

const [ axiosInstance, APPOINTMENT_URL ] = configAPIFacade(process.env.REACT_APP_APPOINTMENT_SERVICE_URL, mockApointment);

export const appointmentAPI = {
  getAllByIdUser: (idUser) => {
    return axiosInstance.get(`${APPOINTMENT_URL}/appointments/user/${idUser}`);
  },

  getDatatable: (params) => {
    return axiosInstance.post(`${APPOINTMENT_URL}/appointments/datatable`, { ...params });
  },

  getAll: () => {
    return axiosInstance.get(`${APPOINTMENT_URL}/appointments`);
  },

  getOneById: (id) => {
    return axiosInstance.get(`${APPOINTMENT_URL}/appointments/${id}`);
  },

  cancel: (id) => {
    return axiosInstance.put(`${APPOINTMENT_URL}/appointments/${id}/cancel`);
  },

  updateStatus: (id, req) => {
    return axiosInstance.put(`${APPOINTMENT_URL}/appointments/${id}/status`, req);
  },

  addMeetingLink: (id, req) => {
    return axiosInstance.put(`${APPOINTMENT_URL}/appointments/${id}/link-meeting`, req);
  },

  delete: (id) => {
    return axiosInstance.delete(`${APPOINTMENT_URL}/appointments/${id}`);
  },

  create: (body) => {
    return axiosInstance.post(`${APPOINTMENT_URL}/appointments`, { ...body });
  },
};
