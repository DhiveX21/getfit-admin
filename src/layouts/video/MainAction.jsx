import { exercise } from "_slices";
import { exerciseAPI } from "_api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { alertError } from "helpers/UtilHelpers";

const MySwal = withReactContent(Swal);

const { actions } = exercise.slice;
const { callTypes } = exercise;

export const datatableAction = (payload) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return exerciseAPI
    .getDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveList({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show patient",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const getAllCategoryAction = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return exerciseAPI
    .getAllCategory()
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveListCategory({ entities: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Video Category List",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const createCategoryAction = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return exerciseAPI
    .createCategory(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Video Category",
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
          title: "Failed Create Video Category",
          icon: "error",
        });
      }
      throw new Error(error.response.status);
    });
};

export const createAction = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return exerciseAPI
    .create(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Video",
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
          title: "Can't show Video Category List",
          icon: "error",
        });
      }
      throw new Error(error.response.status);
    });
};

export const updateAction = (body, id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return exerciseAPI
    .update(id, body)
    .then((response) => {
      MySwal.fire({
        title: "Success Update Video",
        icon: "success",
      });
      const data = response.data.data;
      dispatch(actions.update({ data: data }));
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
          title: "Can't update Video",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const detailAction = (videoId) => (dispatch) => {
  if (!videoId) {
    return dispatch(actions.saveObject({ data: undefined }));
  }
  dispatch(actions.startCall({ callType: callTypes.action }));
  return exerciseAPI.getOneById(videoId)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveObject({ data: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail Video",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteAction = (videoId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return exerciseAPI.delete(videoId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Video",
        text: data.message,
        icon: "success",
      });
      dispatch(actions.delete({ id: videoId }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Delete Video",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
