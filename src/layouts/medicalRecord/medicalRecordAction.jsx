import { callTypes } from "_slices/medicalRecordSlice";
import { startCall } from "_slices/medicalRecordSlice";
import { catchError } from "_slices/medicalRecordSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { medicalRecordDataTable, medicalRecordDetail } from "_slices/medicalRecordSlice";
import {
  getOneMedicalRecord,
  updateMedicalRecord,
  getAllMedicalRecordsDatatable,
  createMedicalRecord,
  deleteMedicalRecord,
} from "_api/medicalRecordApi";
import { getAllAppointment } from "_api/appointmentApi";
import { dateFormater } from "helpers/DateHelpers";

const MySwal = withReactContent(Swal);

export const dataTableMedicalRecord = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllMedicalRecordsDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(medicalRecordDataTable({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};

// export const getAllAppointmentAction = () => (dispatch) => {
//   return getAllAppointment()
//     .then((response) => {
//       return response.data.data;
//     })
//     .catch((err) => {
//       err.clientMessage = "Something went wrong";
//       MySwal.fire({
//         title: "Can't show Appointment",
//         icon: "error",
//       });
//       dispatch(catchError({ err, callType: callTypes.list }));
//     });
// };

export const detailMedicalRecord = (medicalRecordId) => (dispatch) => {
  if (!medicalRecordId) {
    return dispatch(medicalRecordDetail({ medicalRecord: undefined }));
  }
  dispatch(startCall({ callType: callTypes.action }));
  return getOneMedicalRecord(medicalRecordId)
    .then((response) => {
      const data = response.data.data;
      dispatch(medicalRecordDetail({ medicalRecord: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const updateMedicalRecordAction = (medicalRecordData, medicalRecordValue) => (dispatch) => {
  const body = {
    appointment_id: medicalRecordData.appointment_id,
    records: medicalRecordValue,
    date: dateFormater(medicalRecordData.date),
    time: medicalRecordData.time,
    appointment_type: medicalRecordData.appointment_type,
  };
  dispatch(startCall({ callType: callTypes.action }));
  return updateMedicalRecord(medicalRecordData._id, body)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success, Edit",
        icon: "success",
      });
      dispatch(medicalRecordDetail({ medicalRecord: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const createMedicalRecordAction = (appointmentData, records) => (dispatch) => {
  const body = {
    appointment_id: appointmentData._id,
    records: records,
    date: dateFormater(appointmentData.date_appointment),
    time: appointmentData.time_appointment,
    appointment_type: appointmentData.appointment_type,
  };

  return createMedicalRecord(body)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Create Medical Record",
        icon: "success",
      });
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(catchError({ error, callType: callTypes.action }));
    });
};

export const deleteMedicalRecordAction = (medicalRecordId) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return deleteMedicalRecord(medicalRecordId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Medical Record",
        text: data.message,
        icon: "success",
      });
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Delete Medical Record",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};
