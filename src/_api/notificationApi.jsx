import axios from "axios";

const MEDICAL_RECORD_URL = process.env.REACT_APP_APPOINTMENT_SERVICE_URL;
const NOTIFICATION_URL = process.env.REACT_APP_NOTIFICATION_SERVICE_URL;

export function getAllNotificationDatatable(params) {
  return axios.post(`${MEDICAL_RECORD_URL}/records/datatable`, { ...params });
}

export function getAllNotificationCategory() {
  return axios.get(`${NOTIFICATION_URL}/notification-categories`, {
    params: { status: "active" },
  });
}

export function createNotification(body) {
  return axios.post(`${NOTIFICATION_URL}/notifications`, { ...body });
}

export function createNotificationCategory(body) {
  return axios.post(`${NOTIFICATION_URL}/notification-categories`, { ...body });
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
