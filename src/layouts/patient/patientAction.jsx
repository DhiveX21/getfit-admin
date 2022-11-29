import { getAllPatientDatatable } from "_api/patientApi";
import { callTypes } from "_slices/patientSlice";
import { startCall } from "_slices/patientSlice";
import { catchError } from "_slices/patientSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { patientDatatable } from "_slices/patientSlice";
import { patientDetail } from "_slices/patientSlice";
import { getOnePatient } from "_api/patientApi";
import { getAllAppointmentByIdUser } from "_api/appointmentApi";
import { deletePatient } from "_api/patientApi";
import { createUser } from "_api/patientApi";
import { createPatient } from "_api/patientApi";
import { updatePatient } from "_api/patientApi";
const MySwal = withReactContent(Swal);

export const datatablePatient = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllPatientDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(patientDatatable({ entities: data.entities, totalCount: data.totalCount }));
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

export const detailPatient = (patientId) => (dispatch) => {
  if (!patientId) {
    return dispatch(patientDetail({ patient: undefined }));
  }
  dispatch(startCall({ callType: callTypes.action }));
  return getOnePatient(patientId)
    .then((response) => {
      const data = response.data.data;
      dispatch(patientDetail({ patient: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const deletePatientAction = (patientId) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return deletePatient(patientId)
    .then((response) => {
      const data = response.data.data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const getAllAppointmentByIdUserAction = (idUser) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return getAllAppointmentByIdUser(idUser)
    .then((response) => {
      const data = response.data.data;
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail Appointment patient",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const createPatientAction = (props) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));

  const { name, phone_number, email, password, birth_date, address, gender } = props;

  const bodyUser = {
    name: name,
    role: "patient",
    phone_number: phone_number,
    email: email,
    password: password,
  };
  const UserResponse = createUser(bodyUser)
    .then((response) => {
      const data = response.data.data;

      const bodyPatient = {
        user_id: data.id,
        email: data.email,
        name: data.name,
        gender: gender,
        birth_date: birth_date,
        address: address,
      };

      const PatientResponse = createPatient(bodyPatient)
        .then((response) => {
          return response.data.data;
        })
        .catch((error) => {
          console.error(error);
          error.clientMessage = "Something went wrong";
          MySwal.fire({
            title: "Can't Create patient",
            icon: "error",
          });
          dispatch(catchError({ error, callType: callTypes.action }));
        });

      MySwal.fire({
        title: "Success Create Patient",
        icon: "success",
      });

      return PatientResponse;
    })
    .catch((error) => {
      console.error(error);
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Create patient",
        icon: "error",
      });
      dispatch(catchError({ error, callType: callTypes.action }));
    });

  return UserResponse;
};

export const updatePatientAction = (props) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));

  const { name, phone_number, gender, email, userId, patientId, birth_date, address } = props;

  let bodyUser = {};

  if (name) {
    bodyUser = { ...bodyUser, name: name };
  }
  if (phone_number) {
    bodyUser = { ...bodyUser, phone_number: phone_number };
  }
  if (gender) {
    bodyUser = { ...bodyUser, gender: gender };
  }
  if (email) {
    bodyUser = { ...bodyUser, email: email };
  }
  if (birth_date) {
    bodyUser = { ...bodyUser, birth_date: birth_date };
  }
  if (address) {
    bodyUser = { ...bodyUser, address: address };
  }
  if (userId) {
    bodyUser = { ...bodyUser, user_id: userId };
  }

  const UserResponse = updatePatient(patientId, bodyUser)
    .then((response) => {
      const data = response.data.data;

      MySwal.fire({
        title: "Success Update Patient",
        icon: "success",
      });

      return data;
    })
    .catch((error) => {
      console.error(error);
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Create patient",
        icon: "error",
      });
      dispatch(catchError({ error, callType: callTypes.action }));
    });

  return UserResponse;
};
