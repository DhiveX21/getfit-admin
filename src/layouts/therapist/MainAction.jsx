import { therapist } from "_slices";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { therapistAPI } from "_api";
import { alertError } from "helpers/UtilHelpers";
// import { alertError } from "helpers/UtilHelpers";

const { actions } = therapist.slice;
const callTypes = therapist.callTypes;

const MySwal = withReactContent(Swal);

export const datatableAction = (payload) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return therapistAPI
    .getDatatable(payload)
    .then((response) => {
      const { entities, totalCount } = response.data.data;
      dispatch(actions.saveList({ entities: entities, totalCount: totalCount }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show therapist",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      throw new Error(error.response.status);
    });
};

export const detailAction = (therapistId) => (dispatch) => {
  if (!therapistId) {
    return dispatch(actions.saveObject({ data: undefined }));
  }
  dispatch(actions.startCall({ callType: callTypes.action }));
  return therapistAPI
    .getOneById(therapistId)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveObject({ data: data }));
      return data;
    })
    .catch((error) => {
      console.log(error.response);
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail therapist",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAction = (therapistId, body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return therapistAPI
    .update(therapistId, body)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success, Edit",
        icon: "success",
      });
      dispatch(actions.saveObject({ data: data }));
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status === 400) {
        const msg = error.response.data.message;
        msg.forEach((item) => {
          alertError(item.message);
        });
      } else {
        error.clientMessage = "Something went wrong";
        MySwal.fire({
          title: "Can't show edit therapist",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const createAction = (body) => (dispatch) => {
  const bodyUser = {
    name: body.name,
    role: "therapist",
    phone_number: body.phone_number,
    email: body.email,
    password: body.password,
  };
  return therapistAPI
    .createUser(bodyUser)
    .then((response) => {
      const data = response.data.data;

      body.user_id = data.id;
      therapistAPI.create(body).then((response) => {
        MySwal.fire({
          title: "Success Create Therapist",
          icon: "success",
        });
        return true;
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
          title: "Can't create therapist",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const deleteAction = (therapistId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return therapistAPI
    .deleteOne(therapistId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Therapist",
        text: data.message,
        icon: "success",
      });
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Delete Therapist",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status)
    });
};
