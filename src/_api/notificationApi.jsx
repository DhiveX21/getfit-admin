import axios from "axios";
import { createMock } from "helpers/ResponseMockTemplate";
import mockNotification from "_mock/notificationApi_mock";

let NOTIFICATION_URL = process.env.REACT_APP_NOTIFICATION_SERVICE_URL;

// env is null url can be redirect to url mock
if (NOTIFICATION_URL === undefined) {
  const mock = createMock();
  mockNotification(mock);
  NOTIFICATION_URL = "api";
}

export const notificationAPI = {
  getDatatable: (params) => {
    return axios.post(`${NOTIFICATION_URL}/notifications/datatable`, { ...params });
  },

  getAllCategory: () => {
    return axios.get(`${NOTIFICATION_URL}/notification-categories`, {
      params: { status: "active" },
    });
  },

  getOneById: (notificationId) => {
    return axios.get(`${NOTIFICATION_URL}/notifications/${notificationId}`);
  },

  create: (body) => {
    return axios.post(`${NOTIFICATION_URL}/notifications`, { ...body });
  },

  update: (body, id) => {
    return axios.put(`${NOTIFICATION_URL}/notifications/${id}`, { ...body });
  },

  createCategory: (body) => {
    return axios.post(`${NOTIFICATION_URL}/notification-categories`, { ...body });
  },

  delete: (notificationId) => {
    return axios.delete(`${NOTIFICATION_URL}/notifications/${notificationId}`);
  },

  createToWA: (body) => {
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
  },
};
