import { orderAPI } from "_api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { order } from "_slices";

const MySwal = withReactContent(Swal);

const { actions } = order.slice;
const callTypes = order.callTypes;

export const datatableAction = (payload) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return orderAPI
    .getDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveList({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show order",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const detailAction = (orderId) => (dispatch) => {
  if (!orderId) {
    return dispatch(actions.saveObject({ data: undefined }));
  }
  dispatch(actions.startCall({ callType: callTypes.action }));
  return orderAPI
    .getOneById(orderId)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveObject({ data: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail order",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const cancelAction = (orderId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return orderAPI
    .cancel(orderId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't cancel order",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const completeAction = (orderId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return orderAPI
    .complete(orderId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't complete order",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
