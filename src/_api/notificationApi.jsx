import { configAPIFacade } from "helpers/UtilHelpers";
import mockNotification from "_mock/notificationApi_mock";

const [ axiosInstance, NOTIFICATION_URL ] = configAPIFacade(process.env.REACT_APP_NOTIFICATION_SERVICE_URL, mockNotification);

export const notificationAPI = {
  getDatatable: (params) => {
    return axiosInstance.post(`${NOTIFICATION_URL}/notifications/datatable`, { ...params });
  },

  getAllCategory: () => {
    return axiosInstance.get(`${NOTIFICATION_URL}/notification-categories`, {
      params: { status: "active" },
    });
  },

  getOneById: (notificationId) => {
    return axiosInstance.get(`${NOTIFICATION_URL}/notifications/${notificationId}`);
  },

  create: (body) => {
    return axiosInstance.post(`${NOTIFICATION_URL}/notifications`, { ...body });
  },

  update: (body, id) => {
    return axiosInstance.put(`${NOTIFICATION_URL}/notifications/${id}`, { ...body });
  },

  createCategory: (body) => {
    return axiosInstance.post(`${NOTIFICATION_URL}/notification-categories`, { ...body });
  },

  delete: (notificationId) => {
    return axiosInstance.delete(`${NOTIFICATION_URL}/notifications/${notificationId}`);
  },

  createToWA: (body) => {
    const config = {
      headers: {
        "API-Key": process.env.REACT_APP_TAPTALK_API_KEY,
        "Content-Type": "application/json",
      },
    };
    return axiosInstance.post(
      `https://sendtalk-api.taptalk.io/api/v1/message/send_whatsapp`,
      { ...body },
      config
    );
  },
};
