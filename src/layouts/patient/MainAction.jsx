import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { patient } from "_slices";
import { appointmentAPI, patientAPI, medicalRecordAPI } from "_api";
const MySwal = withReactContent(Swal);

const { actions } = patient.slice;
const callTypes = patient.callTypes;

export const datatableAction = (payload) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return patientAPI
    .getDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveList({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show patient",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const getOneAction = (id) => (dispatch) => {
  if (!id) {
    return dispatch(actions.saveObject({ data: undefined }));
  }
  dispatch(actions.startCall({ callType: callTypes.action }));
  return patientAPI
    .getOneById(id)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveObject({ data: data }));
      return data;
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

export const deleteAction = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return patientAPI
    .deleteOne(id)
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
        title: "Can't show detail patient",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getAllAppointmentByIdUserAction = (idUser) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return appointmentAPI
    .getAllAppointmentByIdUser(idUser)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.addSomeAppointment({ appointments: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail Appointment patient",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getAllMedicalRecordByIdUserAction = (idUser) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return medicalRecordAPI
    .getAllMedicalRecordByIdUser(idUser)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.addSomeRecord({ records: data }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show some medical record patient",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createAction = (props) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));

  const { name, phone_number, email, password, birth_date, address, gender } = props;

  const bodyUser = {
    name: name,
    role: "patient",
    phone_number: phone_number,
    email: email,
    password: password,
  };
  const UserResponse = patientAPI
    .createUser(bodyUser)
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

      const PatientResponse = patientAPI
        .create(bodyPatient)
        .then((response) => {
          return response.data.data;
        })
        .catch((error) => {
          error.clientMessage = "Something went wrong";
          MySwal.fire({
            title: "Can't Create patient",
            icon: "error",
          });
          dispatch(actions.catchError({ error, callType: callTypes.action }));
        });

      MySwal.fire({
        title: "Success Create Patient",
        icon: "success",
      });

      return PatientResponse;
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Create patient",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });

  return UserResponse;
};

export const updateAction = (props) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));

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

  const UserResponse = patientAPI
    .update(patientId, bodyUser)
    .then((response) => {
      const data = response.data.data;

      MySwal.fire({
        title: "Success Update Patient",
        icon: "success",
      });

      return data;
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Create patient",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });

  return UserResponse;
};
