import { medicalRecord } from "_slices";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { medicalRecordAPI } from "_api";
import { alertError } from "helpers/UtilHelpers";

const { actions } = medicalRecord.slice;
const callTypes = medicalRecord.callTypes;

const MySwal = withReactContent(Swal);

export const datatableAction = (payload) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return medicalRecordAPI
    .getDatatable(payload)
    .then((response) => {
      const { entities, totalCount } = response.data.data;
      dispatch(actions.saveList({ entities: entities, totalCount: totalCount }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show medical record",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      throw new Error(error.response.status);
    });
};

export const detailAction = (medicalRecordId) => (dispatch) => {
  if (!medicalRecordId) {
    return dispatch(actions.saveObject({ data: undefined }));
  }
  dispatch(actions.startCall({ callType: callTypes.action }));
  return medicalRecordAPI
    .getOneById(medicalRecordId)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveObject({ data: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAction = (medicalRecordId, body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return medicalRecordAPI
    .update(medicalRecordId, body)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success, Edit",
        icon: "success",
      });
      dispatch(actions.saveObject({ data: data }));
    })
    .catch((error) => {
      if (error.response.status === 400) {
        const msg = error.response.data.message;
        msg.forEach((item) => {
          alertError(item.message);
        });
      } else {
        error.clientMessage = "Something went wrong";
        MySwal.fire({
          title: "Can't show detail patient",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const createAction = (body) => (dispatch) => {
  return medicalRecordAPI
    .create(body)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Create Medical Record",
        icon: "success",
      });
      return data;
    })
    .catch((error) => {
      if (error.response.status === 400) {
        const msg = error.response.data.message;
        msg.forEach((item) => {
          alertError(item.message);
        });
      } else {
        error.clientMessage = "Something went wrong";
        MySwal.fire({
          title: "Can't show detail patient",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const deleteAction = (medicalRecordId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return medicalRecordAPI
    .delete(medicalRecordId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Medical Record",
        text: data.message,
        icon: "success",
      });
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Delete Medical Record",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status)
    });
};
