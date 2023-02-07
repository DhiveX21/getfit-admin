import { SuccessResponse } from "helpers/ResponseMockTemplate";
import {
  DatatableNotification,
  ListCategory,
  ListNotification,
} from "./datas/notificationData_mock";

export default function mockNotification(mock) {
  // getOneById
  mock.onGet(/api\/notifications\/\d+/).reply((config) => {
    const id = config.url.match(/api\/notifications\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success get notifications", "success", 200, ListNotification[0])];
  });

  // GetAllDatatable
  mock.onPost("api/notifications/datatable").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, DatatableNotification];
  });

  // GetAllCategory
  mock.onGet("api/notification-categories").reply((config) => {
    if (config.params.status === "active") {
      // or check for deep equality with config.params
      return [200, SuccessResponse("Success get all category", "success", 200, ListCategory)];
    } else {
      return [400];
    }
  });

  // create
  mock.onPost("api/notifications").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [
      200,
      SuccessResponse("Success create notifications", "success", 200, ListNotification[0]),
    ];
  });

  // create Category
  mock.onPost("api/notification-categories").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, SuccessResponse("Success create category", "success", 200, ListCategory[0])];
  });

  // deleteOne
  mock.onDelete(/api\/notifications\/\d+/).reply((config) => {
    const id = config.url.match(/api\/notifications\/(\d+)/)[1];
    console.log(id);

    return [
      200,
      SuccessResponse("Success delete notification", "success", 200, { message: "deleted" }),
    ];
  });

  // update
  mock.onPut(/api\/notifications\/\d+/).reply((config) => {
    const data = JSON.parse(config.data);
    const id = config.url.match(/api\/notifications\/(\d+)/)[1];

    console.log({ data, id });

    return [
      200,
      SuccessResponse("Success update notification", "success", 200, ListNotification[0]),
    ];
  });
}
