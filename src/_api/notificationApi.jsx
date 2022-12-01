import axios from "axios";

const NOTIFICATION_URL = process.env.REACT_APP_NOTIFICATION_SERVICE_URL;

export function getAllNotificationDatatable(params) {
  return axios.post(`${NOTIFICATION_URL}/notifications/datatable`, { ...params });
}

export function getAllNotificationCategory() {
  return axios.get(`${NOTIFICATION_URL}/notification-categories`, {
    params: { status: "active" },
  });
}

export function getOneNotification(notificationId) {
  return axios.get(`${NOTIFICATION_URL}/notifications/${notificationId}`);
}

export function createNotification(body) {
  return axios.post(`${NOTIFICATION_URL}/notifications`, { ...body });
}

export function updateNotification(body, id) {
  return axios.put(`${NOTIFICATION_URL}/notifications/${id}`, { ...body });
}

export function createNotificationCategory(body) {
  return axios.post(`${NOTIFICATION_URL}/notification-categories`, { ...body });
}

export function deleteNotification(notificationId) {
  return axios.delete(`${NOTIFICATION_URL}/notifications/${notificationId}`);
}

export function createNotificationWhatsapp(body) {
  const config = {
    headers: {
      "API-Key": process.env.REACT_APP_TAPTALK_API_KEY,
      "Content-Type": "application/json",
    },
  };
  return axios.post(
    `https://sendtalk-api.taptalk.io/api/v1/message/send_whatsapp`,
    { ...body },
    config
  );
}
