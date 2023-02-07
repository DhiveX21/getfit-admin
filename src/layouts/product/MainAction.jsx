import { alertError } from "helpers/UtilHelpers";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { productAPI } from "_api";
import { product } from "_slices";

const MySwal = withReactContent(Swal);

const { actions } = product.slice;
const { callTypes } = product;

export const datatableAction = (payload) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return productAPI
    .getDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveList({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show product",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const masterAction = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return productAPI
    .getAllMaster()
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveMaster({ entities: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Master Products",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const facilitiesAction = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return productAPI
    .getAllFacility()
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveFacility({ entities: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Facilities Products",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const createMasterAction = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return productAPI
    .createMaster(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Master Product",
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
          title: "Failed Create Master Product",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const createFacilityAction = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return productAPI
    .createFacility(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Facility Product",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((error) => {
      if (error.response.status) {
        const msg = error.response.data.message;
        msg.forEach((item) => {
          alertError(item.message);
        });
      } else {
        error.clientMessage = "Something went wrong";
        MySwal.fire({
          title: "Failed Create Facility Product",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const createAction = (body) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return productAPI
    .create(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Product",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((error) => {
      if (error.response.status) {
        const msg = error.response.data.message;
        msg.forEach((item) => {
          alertError(item.message);
        });
      } else {
        error.clientMessage = "Something went wrong";
        MySwal.fire({
          title: "Can't Create Product",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const updateAction = (body, id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return productAPI
    .update(id, body)
    .then((response) => {
      MySwal.fire({
        title: "Success Update Product",
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
          title: "Can't update Product",
          icon: "error",
        });
      }
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      throw new Error(error.response.status);
    });
};

export const detailAction = (productId) => (dispatch) => {
  if (!productId) {
    return dispatch(actions.saveObject({ data: undefined }));
  }
  dispatch(actions.startCall({ callType: callTypes.action }));
  return productAPI
    .getOneById(productId)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.saveObject({ data: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail Product",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteAction = (productId) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return productAPI
    .deleteOne(productId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Product",
        text: data.message,
        icon: "success",
      });
      dispatch(actions.delete({ id: productId }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Delete Product",
        icon: "error",
      });
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
