import { getAllAppointmentDatatable } from "_api/appointmentApi";
import { callTypes } from "_slices/appointmentSlice";
import { startCall } from "_slices/appointmentSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { catchError } from "_slices/appointmentSlice";
import { appointmentDatatable } from "_slices/appointmentSlice";
import { appointmentDetail } from "_slices/appointmentSlice";
import { getOneAppointment } from "_api/appointmentApi";
const MySwal = withReactContent(Swal);

export const datatable = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllAppointmentDatatable(payload)
    .then((response) => {
      const { entities, totalCount } = response.data.data;
      dispatch(appointmentDatatable({ entities: entities, totalCount: totalCount }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show appointment",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};
export const detailAppointment = (appointmentId) => (dispatch) => {
  if (!appointmentId) {
    return dispatch(appointmentDetail({ appointment: undefined }));
  }
  dispatch(startCall({ callType: callTypes.action }));
  return getOneAppointment(appointmentId)
    .then((response) => {
      const data = response.data.data;
      dispatch(appointmentDetail({ appointment: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show appointment",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};
