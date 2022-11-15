import { callTypes } from "_slices/medicalRecordSlice";
import { startCall } from "_slices/medicalRecordSlice";
import { catchError } from "_slices/medicalRecordSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const datatableVideo = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllVideoDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(videoDataTable({ entities: data.entities, totalCount: data.totalCount }));
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
