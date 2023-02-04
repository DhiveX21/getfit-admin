import { appointment } from "_slices";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { appointmentAPI } from "_api";
import { alertError } from "helpers/UtilHelpers";
const MySwal = withReactContent(Swal);

const { actions } = appointment.slice;
const callTypes = appointment.callTypes;

export const datatableAction = (payload) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return appointmentAPI
    .getDatatable(payload)
    .then((response) => {
      const { entities, totalCount } = response.data.data;
      dispatch(actions.saveList({ entities: entities, totalCount: totalCount }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show appointment",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const detailAction = (appointmentId) => (dispatch) => {
  if (!appointmentId) {
    return dispatch(actions.saveObject({ data: undefined }));
  }
  dispatch(actions.startCall({ callType: callTypes.action }));
  return appointmentAPI
    .getOneById(appointmentId)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveObject({ data: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show appointment",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const cancelAction = (appointmentId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return appointmentAPI
    .cancel(appointmentId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
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
          title: "Can't cancel appointment",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const deleteAction = (appointmentId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return appointmentAPI
    .delete(appointmentId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Appointment",
        text: data.message,
        icon: "success",
      });
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Delete appointment",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAction = (appointmentId, req) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return appointmentAPI
    .updateStatus(appointmentId, req)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
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
          title: "Can't update appointment",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const addMeetingLinkAction = (appointmentId, meetingLink) => (dispatch) => {
  const body = {
    link_meeting: meetingLink,
  };
  dispatch(actions.startCall({ callType: callTypes.action }));
  return appointmentAPI
    .addMeetingLink(appointmentId, body)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
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
          title: "Can't update appointment",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const createAction = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return appointmentAPI
    .create(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Appointment",
        icon: "success",
      });
      const data = response.data.data;
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
          title: "Can't Create Appointment",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};
