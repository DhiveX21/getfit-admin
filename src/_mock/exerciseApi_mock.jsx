import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { datatableExercise, ListExercise } from "./datas/exerciseData_mock";
import { ListCategory } from "./datas/notificationData_mock";

export default function mockExercise(mock) {
  // getDatatable
  mock.onPost("api/videos/datatable").reply((config) => {
    return [200, datatableExercise];
  });

  // get Category
  mock.onGet("api/video-categories").reply((config) => {
    return [200, SuccessResponse("Success get video category", "success", 200, ListExercise)];
  });

  // create Category
  mock.onPost("api/video-categories").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);
    return [200, SuccessResponse("Success create video category", "success", 200, ListCategory[0])];
  });

  // create
  mock.onPost("api/videos").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, SuccessResponse("Success create video", "success", 200, ListExercise[0])];
  });

  // getOneById
  mock.onGet(/api\/videos\/\d+/).reply((config) => {
    const id = config.url.match(/api\/videos\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success get video", "success", 200, ListExercise[0])];
  });

  // update
  mock.onPut(/api\/videos\/\d+/).reply((config) => {
    const id = config.url.match(/api\/videos\/(\d+)/)[1];
    const data = JSON.parse(config.data);

    console.log({ id, data });

    return [200, SuccessResponse("Success update video", "success", 200, ListExercise[0])];
  });

  // deleteOne
  mock.onDelete(/api\/videos\/\d+/).reply((config) => {
    const id = config.url.match(/api\/videos\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success delete video", "success", 200, { message: "deleted" })];
  });
}
