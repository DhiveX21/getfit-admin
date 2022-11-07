import { callTypes } from "_slices/notificationSlice";
import { startCall } from "_slices/notificationSlice";
import { catchError } from "_slices/notificationSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { notificationDataTable, notificationCategory } from "_slices/notificationSlice";
import {
  getAllNotificationDatatable,
  getAllNotificationCategory,
  createNotification,
  createNotificationCategory,
  createNotificationWhatsapp,
} from "_api/notificationApi";
import {} from "_api/notificationApi";
import { getAllAppointment } from "_api/appointmentApi";
import { dateFormater } from "helpers/DateHelpers";

const MySwal = withReactContent(Swal);

export const dataTableNotification = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllNotificationDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(notificationDataTable({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Notification List",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};

export const categoryNotificationAction = () => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllNotificationCategory()
    .then((response) => {
      const data = response.data.data;
      dispatch(notificationCategory({ entities: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Notification Category List",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};

export const createNotificationAction =
  (patientId, isImportant, categoryId, title, description) => (dispatch) => {
    const body = {
      title: title,
      description: description,
      category_id: +categoryId,
      user_id: +patientId,
      is_important: isImportant,
    };
    dispatch(startCall({ callType: callTypes.list }));
    return createNotification(body)
      .then((response) => {
        MySwal.fire({
          title: "Success Create Notification",
          icon: "success",
        });
        const data = response.data.data;
        return data;
      })
      .catch((err) => {
        err.clientMessage = "Something went wrong";
        MySwal.fire({
          title: "Can't show Notification Category List",
          icon: "error",
        });
      });
  };

export const createNotificationCategoryAction = (title, description) => (dispatch) => {
  const body = {
    title: title,
    description: description,
  };
  dispatch(startCall({ callType: callTypes.list }));
  return createNotificationCategory(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Notification Category",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Failed Create Notification Category",
        icon: "error",
      });
    });
};

export const createNotificationWhatsappAction = (phoneNumber, message) => (dispatch) => {
  const body = {
    phone: phoneNumber,
    messageType: "text",
    body: message,
  };
  dispatch(startCall({ callType: callTypes.list }));
  return createNotificationWhatsapp(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Notification Category",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Failed Create Notification Category",
        icon: "error",
      });
    });
};
