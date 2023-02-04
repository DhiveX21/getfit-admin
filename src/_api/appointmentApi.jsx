import axios from "axios";
import { createMock } from "helpers/ResponseMockTemplate";
import mockApointment from "_mock/appointmentApi_mock";

let APPOINTMENT_URL = process.env.REACT_APP_APPOINTMENT_SERVICE_URL;

// env is null url can be redirect to url mock
if (APPOINTMENT_URL === undefined) {
  const mock = createMock();
  mockApointment(mock);
  APPOINTMENT_URL = "api";
}

export const appointmentAPI = {
  getAllAppointmentByIdUser: (idUser) => {
    return axios.get(`${APPOINTMENT_URL}/appointments/user/${idUser}`);
  },

  getDatatable: (params) => {
    return axios.post(`${APPOINTMENT_URL}/appointments/datatable`, { ...params });
  },
  
  getAll: () => {
    return axios.get(`${APPOINTMENT_URL}/appointments`);
  },
  
  getOneById: (id) => {
    return axios.get(`${APPOINTMENT_URL}/appointments/${id}`);
  },
  
  cancel: (id) => {
    return axios.put(`${APPOINTMENT_URL}/appointments/${id}/cancel`);
  },
  
  updateStatus: (id, req) => {
    return axios.put(`${APPOINTMENT_URL}/appointments/${id}/status`, req);
  },
  
  addMeetingLink: (id, req) => {
    return axios.put(`${APPOINTMENT_URL}/appointments/${id}/link-meeting`, req);
  },
  
  delete: (id) => {
    return axios.delete(`${APPOINTMENT_URL}/appointments/${id}`);
  },
  
  create: (body) => {
    return axios.post(`${APPOINTMENT_URL}/appointments`, { ...body });
  }
};

