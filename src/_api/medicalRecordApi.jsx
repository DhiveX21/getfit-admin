import { configAPIFacade } from "helpers/UtilHelpers";
import mockMedicalRecord from "_mock/medicalRecordApi_mock";

const [ axiosInstance, MEDICAL_RECORD_URL ] = configAPIFacade(process.env.REACT_APP_APPOINTMENT_SERVICE_URL, mockMedicalRecord);

export const medicalRecordAPI = {
  getAllByIdUser: (idUser) => {
    return axiosInstance.get(`${MEDICAL_RECORD_URL}/records/user/${idUser}`);
  },

  getDatatable: (params) => {
    return axiosInstance.post(`${MEDICAL_RECORD_URL}/records/datatable`, { ...params });
  },

  getOneById: (id) => {
    return axiosInstance.get(`${MEDICAL_RECORD_URL}/records/${id}`);
  },

  update: (id, body) => {
    return axiosInstance.put(`${MEDICAL_RECORD_URL}/records/${id}`, { ...body });
  },

  create: (params) => {
    return axiosInstance.post(`${MEDICAL_RECORD_URL}/records`, { ...params });
  },

  delete: (id) => {
    return axiosInstance.delete(`${MEDICAL_RECORD_URL}/records/${id}`);
  },
};
