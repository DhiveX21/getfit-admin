import axios from "axios";

const EXERCISE_URL = process.env.REACT_APP_EXERCISE_SERVICE_URL;

export function getAllVideoDatatable(params) {
  return axios.post(`${EXERCISE_URL}/videos/datatable`, { ...params });
}
export function getAllVideoCategory() {
  return axios.get(`${EXERCISE_URL}/video-categories`);
}
export function createVideoCategory(body) {
  return axios.post(`${EXERCISE_URL}/video-categories`, { ...body });
}
export function createVideo(body) {
  return axios.post(`${EXERCISE_URL}/videos`, { ...body });
}
export function updateVideo(id, body) {
  return axios.put(`${EXERCISE_URL}/videos/${id}`, { ...body });
}
export function getOneVideo(videoId) {
  return axios.get(`${EXERCISE_URL}/videos/${videoId}`);
}
export function deleteVideo(videoId) {
  return axios.delete(`${EXERCISE_URL}/videos/${videoId}`);
}
