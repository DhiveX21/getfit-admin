import { getAllOrderDatatable } from "_api/orderApi";
import { startCall, callTypes } from "_slices/orderSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { catchError } from "_slices/orderSlice";
import { orderDatatable } from "_slices/orderSlice";
import { getOneOrder, cancelOrder, completeOrder } from "_api/orderApi";
import { orderDetail } from "_slices/orderSlice";
const MySwal = withReactContent(Swal);

export const datatable = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllOrderDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(orderDatatable({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show order",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};

export const detailOrder = (orderId) => (dispatch) => {
  if (!orderId) {
    return dispatch(orderDetail({ order: undefined }));
  }
  dispatch(startCall({ callType: callTypes.action }));
  return getOneOrder(orderId)
    .then((response) => {
      const data = response.data.data;
      dispatch(orderDetail({ order: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail order",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const cancelOrderAction = (orderId) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return cancelOrder(orderId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't cancel order",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const completeOrderAction = (orderId) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return completeOrder(orderId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
      });
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't complete order",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};
