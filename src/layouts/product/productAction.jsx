import { callTypes } from "_slices/productSlice";
import { startCall } from "_slices/productSlice";
import { catchError } from "_slices/productSlice";
import { productDataTable } from "_slices/productSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getAllProductDatatable } from "_api/productApi";
import { createProduct } from "_api/productApi";
import { masterProduct } from "_slices/productSlice";
import { getAllMasterProduct } from "_api/productApi";
import { createMasterProduct } from "_api/productApi";
import { getOneProduct } from "_api/productApi";
import { productDetail } from "_slices/productSlice";
import { deleteProduct } from "_api/productApi";
import { productDeleted } from "_slices/productSlice";
import { updateProduct } from "_api/productApi";
import { productUpdated } from "_slices/productSlice";
import { getAllFacilityProduct } from "_api/productApi";
import { facilityProduct } from "_slices/productSlice";
import { createFacilityProduct } from "_api/productApi";
const MySwal = withReactContent(Swal);

export const dataTableProduct = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllProductDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(productDataTable({ entities: data.entities, totalCount: data.totalCount }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show product",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};

export const masterProductAction = () => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllMasterProduct()
    .then((response) => {
      const data = response.data.data;
      dispatch(masterProduct({ entities: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Master Products",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};

export const facilitiesProductAction = () => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllFacilityProduct()
    .then((response) => {
      const data = response.data.data;
      dispatch(facilityProduct({ entities: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Facilities Products",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};

export const createMasterProductAction = (body) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return createMasterProduct(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Master Product",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Failed Create Master Product",
        icon: "error",
      });
    });
};

export const createFacilityProductAction = (body) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return createFacilityProduct(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Facility Product",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Failed Create Facility Product",
        icon: "error",
      });
    });
};

export const createProductAction = (body) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return createProduct(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Product",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Create Product",
        icon: "error",
      });
    });
};

export const updateProductAction = (body, id) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return updateProduct(id, body)
    .then((response) => {
      MySwal.fire({
        title: "Success Update Product",
        icon: "success",
      });
      const data = response.data.data;
      dispatch(productUpdated({ data: data }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't update Product",
        icon: "error",
      });
      dispatch(catchError({ error, callType: callTypes.action }));
    });
};

export const detailProduct = (productId) => (dispatch) => {
  if (!productId) {
    return dispatch(productDetail({ product: undefined }));
  }
  dispatch(startCall({ callType: callTypes.action }));
  return getOneProduct(productId)
    .then((response) => {
      const data = response.data.data;
      dispatch(productDetail({ product: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail Product",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const deleteProductAction = (productId) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return deleteProduct(productId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Product",
        text: data.message,
        icon: "success",
      });
      dispatch(productDeleted({ id: productId }));
    })
    .catch((error) => {
      error.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't Delete Video",
        icon: "error",
      });
      dispatch(catchError({ error, callType: callTypes.action }));
    });
};
