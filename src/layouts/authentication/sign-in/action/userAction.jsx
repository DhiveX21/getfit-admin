import { login } from "_api/userApi";
import { signIn } from "_slices/userSlice";
import { catchError } from "_slices/userSlice";
import { callTypes } from "_slices/userSlice";
import { startCall } from "_slices/userSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const loginUser = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return login(payload)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Login",
        icon: "success",
      });
      dispatch(signIn({ user: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Failed Login",
        icon: "error",
      });
      dispatch(catchError({ error, callType: callTypes.action }));
    });
};
