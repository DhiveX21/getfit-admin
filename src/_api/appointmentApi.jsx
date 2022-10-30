import axios from "axios";

const APPOINTMENT_URL = process.env.REACT_APP_APPOINTMENT_SERVICE_URL;

export function getAllAppointmentDatatable(params) {
  return axios.post(`${APPOINTMENT_URL}/appointments/datatable`, { ...params });
}

export function getOneAppointment(appointment_Id) {
  return axios.get(`${APPOINTMENT_URL}/appointments/${appointment_Id}`);
}

export function cancelAppointment(appointment_Id) {
  return axios.put(`${APPOINTMENT_URL}/appointments/${appointment_Id}/cancel`);
}

export function updateStatusAppointment(appointment_Id, req) {
  return axios.put(`${APPOINTMENT_URL}/appointments/${appointment_Id}/status`, req);
}
