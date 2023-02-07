import { notification } from "_slices";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { notificationAPI } from "_api";
import { alertError } from "helpers/UtilHelpers";

const MySwal = withReactContent(Swal);

const { actions } = notification.slice;
const { callTypes } = notification;

export const datatableAction = (payload) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return notificationAPI
    .getDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveList({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Notification List",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      throw new Error(error.response.status)
    });
};

export const categoryAction = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return notificationAPI
    .getAllCategory()
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveCategory({ entities: data }));
    })
    .catch((error) => {
      console.log(error.response);
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Notification Category List",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const createAction = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return notificationAPI
    .create(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Notification",
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
          title: "Can't show Notification Category List",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const updateAction = (body, notificationId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return notificationAPI
    .update(body, notificationId)
    .then((response) => {
      MySwal.fire({
        title: "Success Update Notification",
        icon: "success",
      });
      // const data = response.data.data;
      // dispatch(notificationUpdated({ data: data }));
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
          title: "Can't Update Notification",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const createCategory = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return notificationAPI
    .createCategory(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Notification Category",
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
          title: "Failed Create Notification Category",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const createToWAAction = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return notificationAPI
    .createToWA(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Notification Category",
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
          title: "Failed Create Notification Category",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const detailAction = (notificationId) => (dispatch) => {
  if (!notificationId) {
    return dispatch(actions.saveObject({ data: undefined }));
  }
  dispatch(actions.startCall({ callType: callTypes.action }));
  return notificationAPI
    .getOneById(notificationId)
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

export const deleteAction = (notificationId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return notificationAPI
    .delete(notificationId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Notification",
        text: data.message,
        icon: "success",
      });
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Delete Notification",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
