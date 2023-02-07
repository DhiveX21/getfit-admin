import { configAPIFacade } from "helpers/UtilHelpers";
import mockPatient from "_mock/patientApi_mock";

const [ axiosInstance, PATIENT_URL ] = configAPIFacade(process.env.REACT_APP_USER_SERVICE_URL, mockPatient);


export const patientAPI = {
  getDatatable: (params) => {
    return axiosInstance.post(`${PATIENT_URL}/patients/datatable`, { ...params });
  },
  
  getOneById: (id) => {
    return axiosInstance.get(`${PATIENT_URL}/patients/${id}`);
  },
  
  getAll: () => {
    return axiosInstance.get(`${PATIENT_URL}/patients`);
  },
  
  deleteOne: (id) => {
    return axiosInstance.delete(`${PATIENT_URL}/patients/${id}`);
  },
  
  createUser: (body) => {
    return axiosInstance.post(`${PATIENT_URL}/users`, { ...body });
  },
  
  create: (body) => {
    return axiosInstance.post(`${PATIENT_URL}/patients`, { ...body });
  },
  
  update: (id, body) => {
    return axiosInstance.put(`${PATIENT_URL}/patients/${id}`, { ...body });
  }
}
