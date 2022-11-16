import axios from "axios";

const APPOINTMENT_URL = process.env.REACT_APP_APPOINTMENT_SERVICE_URL;

export function getAllAppointmentDatatable(params) {
  return axios.post(`${APPOINTMENT_URL}/appointments/datatable`, { ...params });
}
export function getAllAppointment() {
  return axios.get(`${APPOINTMENT_URL}/appointments`);
}

export function getAllAppointmentByIdUser(idUser) {
  return axios.get(`${APPOINTMENT_URL}/appointments/user/${idUser}`);
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

export function addMeetingLinkAppointment(appointment_Id, req) {
  return axios.put(`${APPOINTMENT_URL}/appointments/${appointment_Id}/link-meeting`, req);
}

export function deleteAppointment(appointment_Id) {
  return axios.delete(`${APPOINTMENT_URL}/appointments/${appointment_Id}`);
}
