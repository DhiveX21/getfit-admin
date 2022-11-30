import { callTypes } from "_slices/exerciseSlice";
import { startCall } from "_slices/exerciseSlice";
import { catchError } from "_slices/exerciseSlice";
import { exerciseVideoDataTable } from "_slices/exerciseSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getAllVideoDatatable } from "_api/exerciseApi";
import { exerciseVideoCategory } from "_slices/exerciseSlice";
import { getAllVideoCategory } from "_api/exerciseApi";
import { createVideoCategory } from "_api/exerciseApi";
import { videoDetail } from "_slices/exerciseSlice";
import { createVideo } from "_api/exerciseApi";
import { updateVideo } from "_api/exerciseApi";
import { getOneVideo } from "_api/exerciseApi";
import { deleteVideo } from "_api/exerciseApi";
import { exerciseVideoUpdated } from "_slices/exerciseSlice";
import { exerciseVideoDeleted } from "_slices/exerciseSlice";
const MySwal = withReactContent(Swal);

export const dataTableVideo = (payload) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllVideoDatatable(payload)
    .then((response) => {
      const data = response.data.data;
      dispatch(exerciseVideoDataTable({ entities: data.entities, totalCount: data.totalCount }));
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

export const categoryVideoAction = () => (dispatch) => {
  dispatch(startCall({ callType: callTypes.list }));
  return getAllVideoCategory()
    .then((response) => {
      const data = response.data.data;
      dispatch(exerciseVideoCategory({ entities: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Video Category List",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.list }));
    });
};

export const createVideoCategoryAction = (title, description) => (dispatch) => {
  const body = {
    title: title,
    description: description,
  };
  dispatch(startCall({ callType: callTypes.list }));
  return createVideoCategory(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Video Category",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Failed Create Video Category",
        icon: "error",
      });
    });
};

export const createVideoAction = (categoryId, title, description, videoUrl) => (dispatch) => {
  const body = {
    title: title,
    description: description,
    category_id: +categoryId,
    video_url: videoUrl,
  };
  dispatch(startCall({ callType: callTypes.list }));
  return createVideo(body)
    .then((response) => {
      MySwal.fire({
        title: "Success Create Video",
        icon: "success",
      });
      const data = response.data.data;
      return data;
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show Video Category List",
        icon: "error",
      });
    });
};

export const updateVideoAction =
  (id, categoryId, title, description, videoUrl, is_active) => (dispatch) => {
    const body = {
      title: title,
      description: description,
      category_id: +categoryId,
      video_url: videoUrl,
      is_active: is_active,
    };
    dispatch(startCall({ callType: callTypes.action }));
    return updateVideo(id, body)
      .then((response) => {
        MySwal.fire({
          title: "Success Update Video",
          icon: "success",
        });
        const data = response.data.data;
        dispatch(exerciseVideoUpdated({ data: data }));
      })
      .catch((error) => {
        error.clientMessage = "Something went wrong";
        MySwal.fire({
          title: "Can't update Video",
          icon: "error",
        });
        dispatch(catchError({ error, callType: callTypes.action }));
      });
  };

export const detailVideo = (videoId) => (dispatch) => {
  if (!videoId) {
    return dispatch(videoDetail({ video: undefined }));
  }
  dispatch(startCall({ callType: callTypes.action }));
  return getOneVideo(videoId)
    .then((response) => {
      const data = response.data.data;
      dispatch(videoDetail({ video: data }));
    })
    .catch((err) => {
      err.clientMessage = "Something went wrong";
      MySwal.fire({
        title: "Can't show detail Video",
        icon: "error",
      });
      dispatch(catchError({ err, callType: callTypes.action }));
    });
};

export const deleteVideoAction = (videoId) => (dispatch) => {
  dispatch(startCall({ callType: callTypes.action }));
  return deleteVideo(videoId)
    .then((response) => {
      const data = response.data.data;
      MySwal.fire({
        title: "Success Delete Video",
        text: data.message,
        icon: "success",
      });
      dispatch(exerciseVideoDeleted({ id: videoId }));
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
